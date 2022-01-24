/*
 * @Description: 分页的Dto 公共类 用来继承
 * @Author: zhoujie
 * @Date: 2022-01-12 14:53:13
 * @LastEditTime: 2022-01-24 10:45:15
 * @LastEditors: zhoujie
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export abstract class PageDto {
  @ApiProperty({
    description: '分页大小',
  })
  @IsNumberString()
  pageSize: number;

  @ApiProperty({
    description: '页数',
  })
  @IsNumberString()
  pageIndex: number;
}
