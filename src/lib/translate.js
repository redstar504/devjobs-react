const dict = [
  {
    key: 'FT',
    english: 'Full Time'
  },
  {
    key: 'PT',
    english: 'Part Time'
  },
  {
    key: 'FR',
    english: 'Freelance'
  }
]

export function trans(key) {
  const item = dict.find(di => di.key === key)
  return item ? item.english : ''
}