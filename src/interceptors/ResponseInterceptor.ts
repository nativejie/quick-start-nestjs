/*
 * @Description: 响应拦截
 * @Author: zhoujie
 * @Date: 2022-01-07 14:28:59
 * @LastEditTime: 2022-01-13 17:46:50
 * @LastEditors: zhoujie
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ApiResult } from 'src/utils/ApiResult';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        if (data.code && data.message) {
          return data;
        }
        const { pageIndex, pageSize } = data;
        if (
          pageIndex &&
          pageSize &&
          typeof pageIndex === 'string' &&
          typeof pageSize === 'string'
        ) {
          data.pageIndex = parseInt(data.pageIndex);
          data.pageSize = parseInt(data.pageSize);
        }
        return ApiResult.toResult(data);
      }),
    );
  }
}
