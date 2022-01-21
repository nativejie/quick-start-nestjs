/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-21 17:23:56
 * @LastEditTime: 2022-01-21 18:03:52
 * @LastEditors: zhoujie
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  generateEntity(tableName: string) {
    return '';
  }

  async generateMVC(tableName: string) {
    if (!tableName) {
      throw Error('请输入表名');
    }
    this.generateEntity(tableName);
  }
}
