/**
 * 格式化金额
 * @param value 值
 */
export function formatAmount(value: number | string = 0) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
