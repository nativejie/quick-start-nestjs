/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-21 17:23:56
 * @LastEditTime: 2022-01-21 18:03:06
 * @LastEditors: zhoujie
 */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../service/AppService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate-entity')
  generateEntity(@Query('tableName') tableName: string) {
    return 'hello world';
  }

  @Get('generate-mvc')
  async generateMVC(@Query('tableName') tableName: string) {
    await this.appService.generateMVC(tableName);
    return 'success';
  }
}
