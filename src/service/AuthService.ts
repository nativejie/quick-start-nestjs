/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:53:04
 * @LastEditTime: 2022-02-16 15:05:44
 * @LastEditors: zhoujie
 */
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constans';
import { CryptoUtil } from 'src/utils/CryptoUtil';

@Injectable()
export class AuthService {
  @Inject()
  private readonly jwtService: JwtService;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('用户名或密码错误');
    }
    if (CryptoUtil.md5(password, user.salt) === user.password) {
      const { password, ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException('用户名或密码错误');
    }
  }

  async login(user: User): Promise<{ access_token: string }> {
    const { id, username } = user;
    const payload = { username, sub: id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
}
