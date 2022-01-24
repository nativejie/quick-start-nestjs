/*
 * @Description: 基本实体文件
 * @Author: zhoujie
 * @Date: 2022-01-07 15:31:40
 * @LastEditTime: 2022-01-24 10:04:15
 * @LastEditors: zhoujie
 */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseColumn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({
    name: 'creator',
    type: 'int',
    comment: '创建人',
  })
  creator: number;

  @Column({
    name: 'modifier',
    type: 'int',
    comment: '最后修改人',
  })
  modifier: number;

  @CreateDateColumn({ name: 'created_time' })
  createdTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;
}
