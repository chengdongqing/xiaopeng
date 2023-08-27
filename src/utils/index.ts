/**
 * 格式化金额
 */
export function formatAmount(value: number | string = 0) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 将首字母大写
 */
export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
