/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-21 17:23:56
 * @LastEditTime: 2022-01-24 16:55:52
 * @LastEditors: zhoujie
 */
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { writeFileSync } from 'fs';
import { formateColumns } from 'src/utils/Table';
import { Connection } from 'typeorm';

// TODO 生成模板
@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    private logger: Logger,
  ) {}
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
    const result = await this.connection.query('show tables');
    const tables = result.map(
      (tableInfo) => tableInfo[Object.keys(tableInfo)[0]],
    );
    this.logger.log('找到以下表：' + JSON.stringify(tables), 'Database Tables');
    const columns = await this.connection.query(
      `show full columns from ${tables[5]}`,
    );
    formateColumns(columns).forEach((column) => {
      entityTemplate += `
      @Column({
        name: '${column.name}',
        type: '${column.type}',${
        column.length ? '\nlength: ' + column.length + ',' : ''
      }
        nullable: ${column.nullable},
        comment: '${column.comment}',
      })
      ${column.name}: ${column.ormType};
      
      `;
    });
    entityTemplate += `
    }`;
    writeFileSync('./Test.ts', entityTemplate);
    this.generateEntity(tableName);
    return entityTemplate;
  }
}

let entityTemplate = `
import { Column, Entity } from 'typeorm';
import { BaseColumn } from './BaseColumn';

@Entity()
export class Test extends BaseColumn {

`;
