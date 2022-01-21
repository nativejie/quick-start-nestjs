/*
 * @Description: winston日志的格式化Helper，在此处可以更改日志格式化的样式。
 * @Author: zhoujie
 * @Date: 2021-12-28 14:51:38
 * @LastEditTime: 2022-01-04 15:11:20
 * @LastEditors: zhoujie
 */
import { Format } from 'logform';
import * as bare from 'cli-color/bare';
import * as clc from 'cli-color';
import { format } from 'winston';
import * as winston from 'winston';
import safeStringify from 'fast-safe-stringify';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const nestLikeColorScheme: Record<string, bare.Format> = {
  info: clc.greenBright,
  error: clc.red,
  warn: clc.yellow,
  debug: clc.magentaBright,
  verbose: clc.cyanBright,
};

const LoggerConsoleFormat = (appName = 'Data Service'): Format =>
  format.printf(({ context, level, timestamp, message, ms, ...meta }) => {
    if ('undefined' !== typeof timestamp) {
      // Only format the timestamp to a locale representation if it's ISO 8601 format. Any format
      // that is not a valid date string will throw, just ignore it (it will be printed as-is).
      try {
        if (timestamp === new Date(timestamp).toISOString()) {
          timestamp = new Date(timestamp).toLocaleString();
        }
      } catch (error) {}
    }

    const color =
      nestLikeColorScheme[level] || ((text: string): string => text);
    return (
      `${color(`[${appName}]`)} ` +
      ('undefined' !== typeof timestamp
        ? `${clc.greenBright('-')} ${timestamp} `
        : '') +
      `${clc.yellow(level.charAt(0).toUpperCase() + level.slice(1))}\t` +
      ('undefined' !== typeof context
        ? `${clc.yellow('[' + context + ']')} `
        : '') +
      `${color(message)} - ` +
      `${safeStringify(meta)}` +
      ('undefined' !== typeof ms ? ` ${clc.yellow(ms)}` : '')
    );
  });

export const loggerFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY/MM/DD HH:mm:ss',
  }),
  winston.format.splat(), // String interpolation splat for %d %s-style messages. example: logger.log('info', 'test message %d', 123);
  LoggerConsoleFormat(),
);

export const consoleLoggerTransport = new winston.transports.Console({
  format: loggerFormat,
});

export const errorLoggerFileTransport = new winston.transports.File({
  filename: 'error.log',
  dirname: 'logs',
  level: 'error',
  format: loggerFormat,
});

export const allLoggerFileTransport = new winston.transports.File({
  filename: 'access.log',
  dirname: 'logs',
  format: loggerFormat,
});

export const loggerFileDailyRotate: DailyRotateFile = new DailyRotateFile({
  filename: 'logs/log-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: loggerFormat,
});
