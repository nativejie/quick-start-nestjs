/*
 * @Description: 此模块用于注册一些第三方服务，所有的服务都放置于此注册。例：Redis、TypeOrm等
 * @Author: zhoujie
 * @Date: 2021-12-27 17:08:32
 * @LastEditTime: 2022-02-16 15:11:08
 * @LastEditors: zhoujie
 */
import { Global, Logger, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import DatabaseConfig from 'src/config/DatabaseConfig';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { RoleGuard } from 'src/auth/guard/RoleGuard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        __dirname,
        `../../env/.${process.env.NODE_ENV}.env`,
      ),
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
  ],
  providers: [
    Logger,
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [Logger],
})
@Global()
export class RegisterModule {}
