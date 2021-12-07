/**
 * 公共 types
 */

/**
 * 返回值，对应 handleApiCode 参数
 */
export interface ResData<T> {
  code: number
  data: T
  message: string
}

/**
 * 分页
 */
export interface PaginationReq {
  // 当前页
  currentPage: number
  // 页面大小
  pageSize: number
}
export interface PaginationRes extends PaginationReq {
  total: number
}
