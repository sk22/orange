export const getDayFormatted = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const padZero = v => (v.toString().length === 1 ? `0${v}` : v)
  return `${year}-${padZero(month)}-${padZero(day)}`
}

export const getTimeFromDateString = date => date.slice(11, 16)
