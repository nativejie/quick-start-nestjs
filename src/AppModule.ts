/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-21 17:23:56
 * @LastEditTime: 2022-01-21 17:44:57
 * @LastEditors: zhoujie
 */
import { Module } from '@nestjs/common';
import { AppController } from './controller/AppController';
import { AppService } from './service/AppService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
