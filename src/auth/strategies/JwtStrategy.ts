/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:35:25
 * @LastEditTime: 2022-02-16 14:41:15
 * @LastEditors: zhoujie
 */

import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from 'src/constans';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
