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

/**
 * 给字符串的开头补零
 */
export function padStartZero(value: string | number, length = 2) {
  return value?.toString().padStart(length, '0')
}
