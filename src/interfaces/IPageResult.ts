/**
 * @type pageSize 分页条数
 * @type pageIndex 分页索引
 * @type data 数据
 * @type totalCount 总条数
 */
export interface IPageResult<T> {
  pageSize: number;
  pageIndex: number;
  data: T[];
  totalCount: number;
}
