/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:53:04
 * @LastEditTime: 2022-02-16 14:53:12
 * @LastEditors: zhoujie
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/service/AuthService';
import { AuthController } from 'src/controller/AuthController';
import { User } from 'src/entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
