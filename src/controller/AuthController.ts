/*
 * @Description: 数据组件Controller
 * @Author: zhoujie
 * @Date: 2022-01-07 15:49:29
 * @LastEditTime: 2022-02-16 15:08:49
 * @LastEditors: zhoujie
 */

import { Controller, Inject, Request, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/service/AuthService';
import { Response } from 'express';
@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  async login(@Request() req, @Res({ passthrough: true }) response: Response) {
    const token = await this.authService.login(req.user);
    response.cookie('token', token.access_token);
    return {
      login: true,
    };
  }
}
