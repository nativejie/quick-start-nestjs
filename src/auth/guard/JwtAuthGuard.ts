/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:42:37
 * @LastEditTime: 2022-02-16 14:43:52
 * @LastEditors: zhoujie
 */

import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  @Inject()
  private readonly jwtService: JwtService;

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
