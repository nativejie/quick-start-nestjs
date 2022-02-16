/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:46:08
 * @LastEditTime: 2022-02-16 14:57:21
 * @LastEditors: zhoujie
 */

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/service/AuthService';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  @Inject()
  private readonly authService: AuthService;

  constructor() {
    super();
  }

  /**
   * 校验用户名密码方法
   * @param username 用户名
   * @param password 密码
   */
  async validate(username: string, password: string): Promise<any> {
    return {
      username,
    };
  }
}
