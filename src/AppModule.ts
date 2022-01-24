/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-21 17:23:56
 * @LastEditTime: 2022-01-24 15:57:05
 * @LastEditors: zhoujie
 */
import { Module } from '@nestjs/common';
import { AppController } from './controller/AppController';
import { RegisterModule } from './module/RegisterModule';
import { AppService } from './service/AppService';

@Module({
  imports: [RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
