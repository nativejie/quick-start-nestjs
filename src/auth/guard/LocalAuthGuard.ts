/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:45:45
 * @LastEditTime: 2022-02-16 14:45:46
 * @LastEditors: zhoujie
 */

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
