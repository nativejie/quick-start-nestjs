/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2021-12-24 17:36:56
 * @LastEditTime: 2022-01-21 17:37:56
 * @LastEditors: zhoujie
 */
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './AppModule';
import { GLOABL_API_VERSION } from './constans';
import {
  allLoggerFileTransport,
  consoleLoggerTransport,
  errorLoggerFileTransport,
  loggerFileDailyRotate,
} from './helper/LoggerHelper';
import { ResponseInterceptor } from './interceptors/ResponseInterceptor';

/**
 * 开启swagger文档，默认只在开发环境开启
 * @document https://docs.nestjs.com/openapi/introduction
 */
const enableSwagger = (app) => {
  const config = new DocumentBuilder()
    .setTitle('前端数据服务平台')
    .setDescription(
      '提供数据包装的能力，将一些数据聚合封装成图表所学的形式以供前端快速使用',
    )
    .setVersion(GLOABL_API_VERSION)
    .addTag('Data Service')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('data-service-api', app, document);
};

async function bootstrap() {
  /**
   * 为了方便使用和扩展，替代Nest的日志记录为winston。在其他地方使用时可以这样调用：
   * @example constructor(private readonly logger: Logger) {} 或 constructor(@Inject(Logger) private readonly logger: LoggerService) {}
   * @document https://github.com/gremo/nest-winston
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        consoleLoggerTransport,
        allLoggerFileTransport,
        errorLoggerFileTransport,
        loggerFileDailyRotate,
      ],
    }),
  });

  /**
   * API的版本控制，作为一个合格的API都会都迭代升级的过程，所以相应的也会有版本来控制着。
   * @document https://docs.nestjs.com/techniques/versioning#uri-versioning-type
   */
  app.enableVersioning({
    type: VersioningType.URI,
  });

  /**
   * 暂时请求安全策略设置为false，这里的策略需要细化讨论。
   * @document https://github.com/helmetjs/helmet
   */
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );

  if (process.env.NODE_ENV === 'dev') {
    enableSwagger(app);
    app.enableCors();
  }

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger is running on: ${await app.getUrl()}/data-service-api`);
}
bootstrap();
