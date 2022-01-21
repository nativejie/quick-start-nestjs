/*
 * @Description: 返回结果枚举类
 * @Author: zhoujie
 * @Date: 2021-12-28 18:03:20
 * @LastEditTime: 2022-01-21 17:45:53
 * @LastEditors: zhoujie
 */

export enum ResultMsgEnum {
  EXECUTE_SUCCESS = '执行成功',
  EXECUTE_FAILED = '执行失败',
  QUERY_SUCCESS = '查询成功',
  QUERY_FAILED = '查询失败',
  UPDATE_SUCCESS = '更新成功',
  UPDATE_FAILED = '更新失败',
  DELETE_SUCCESS = '删除成功',
  DELETE_FAILED = '删除失败',
  CREATE_SUCCESS = '创建成功',
  CREATE_FAILED = '创建失败',
}

export enum ResultCodeEnum {
  SUCCESS = 2000,
  FAILED = 1000,
  EMPTY_DATA = 3000,
  CREATE_FAILED = 3001,
  QUERY_FAILED = 3002,
  UPDATE_FAILED = 3003,
  DELETE_FAILED = 3004,
}
