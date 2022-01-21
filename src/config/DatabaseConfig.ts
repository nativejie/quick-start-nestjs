/*
 * @Description: 数据库配置文件
 * @Author: zhoujie
 * @Date: 2021-12-27 16:54:24
 * @LastEditTime: 2022-01-04 15:51:50
 * @LastEditors: zhoujie
 */
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  synchronize: process.env.DATABASE_SYNCHRONIZE,
  logging: process.env.DATABASE_LOGGING || true,
  entites: process.env.DATABASE_ENTITES,
  autoLoadEntities: true,
  maxQueryExecutionTime: 1000,
  retryAttempts: 1000,
}));
