/*
 * @Description: API结果返回类
 * @Author: zhoujie
 * @Date: 2021-12-28 18:02:11
 * @LastEditTime: 2022-01-14 16:00:15
 * @LastEditors: zhoujie
 */
import { ResultCodeEnum, ResultMsgEnum } from '../enum/ApiResultEnum';
import { IPageResult } from '../interfaces/IPageResult';

type Result<T> = {
  data: T | T[];
  code: ResultCodeEnum;
  message: ResultMsgEnum;
};

export class ApiResult {
  /**
   * 分页的返回结果
   * @param data 返回的数据
   * @returns 返回的数据
   */
  static toPageResult<T>(data: IPageResult<T>) {
    return data;
  }

  /**
   * 错误返回结果
   * @param code 错误代码 枚举值 取自ResultCodeEnum
   * @param message 错误信息 枚举值 取自ResultMsgEnum
   * @param data 返回的数据
   * @returns
   */
  static toFailed(
    code: ResultCodeEnum = ResultCodeEnum.FAILED,
    message: ResultMsgEnum = ResultMsgEnum.EXECUTE_SUCCESS,
    data: string = null,
  ) {
    return {
      data,
      code,
      message,
    };
  }

  public static toResult<T>(data: T | T[]): Result<T>;
  public static toResult<T>(data: T | T[], code: ResultCodeEnum): Result<T>;
  public static toResult<T>(
    data: T | T[],
    code: ResultCodeEnum,
    message: ResultMsgEnum,
  ): Result<T>;

  /**
   *
   * @param data 返回的数据 数组或对象
   * @param code 成功的code 属于业务code 取自ResultCodeEnum
   * @param message 成功地信息 取自ResultMsgEnum
   * @returns
   */
  public static toResult<T>(
    data: T | T[] = null,
    code: ResultCodeEnum = ResultCodeEnum.SUCCESS,
    message: ResultMsgEnum = ResultMsgEnum.EXECUTE_SUCCESS,
  ) {
    return {
      data,
      code,
      message,
    };
  }
}
