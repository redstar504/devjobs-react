const dict = [
  {
    key: 'FT',
    english: 'Full Time',
  },
  {
    key: 'PT',
    english: 'Part Time',
  }
]

export function trans(key) {
  const item = dict.find(di => di.key === key)
  return item ? item.english : ""
}