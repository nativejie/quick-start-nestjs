/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-02-16 14:48:06
 * @LastEditTime: 2022-02-16 15:01:38
 * @LastEditors: zhoujie
 */

import { Column, Entity } from 'typeorm';
import { BaseColumn } from './BaseColumn';

@Entity()
export class User extends BaseColumn {
  @Column({
    name: 'username',
    type: 'varchar',
    length: 16,
    comment: '用户名',
  })
  username: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 32,
    comment: '密码',
  })
  password: string;

  @Column({
    name: 'salt',
    type: 'varchar',
    length: 32,
    comment: '盐值',
  })
  salt: string;

  @Column({
    name: 'status',
    type: 'tinyint',
    comment: '状态；0：冻结 1：正常',
    default: 1,
  })
  status: number;
}
