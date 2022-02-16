import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:30:34
 * @LastEditTime: 2022-02-16 14:44:54
 * @LastEditors: zhoujie
 */

/**
 * 角色守卫
 */
@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
