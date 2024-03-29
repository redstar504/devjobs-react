export default function getTimeAgo(date, options = {}) {
  const defaults = {
    now: new Date(),
    display: 'short'
  }

  options = { ...defaults, ...options }

  const delta = (options.now - date) / 1000

  const mapping = [
    {
      name: 'minutes',
      limit: 60,
      formula: s => s / 60,
      display: 'm'
    },
    {
      name: 'hours',
      limit: 24,
      formula: s => s / (60 * 60),
      display: 'h'
    },
    {
      name: 'days',
      limit: 30,
      formula: s => s / (60 * 60 * 24),
      display: 'd'
    },
    {
      name: 'months',
      limit: 12,
      formula: s => s / (60 * 60 * 24 * 30.416),
      display: 'm'
    },
    {
      name: 'years',
      limit: Infinity,
      formula: s => s / (60 * 60 * 24 * 30.416 * 12),
      display: 'y'
    }
  ]

  for (let i = 0; i < mapping.length; i++) {
    let diff = Math.floor(mapping[i].formula(delta))

    if (diff < mapping[i].limit) {
      return options.display === 'long' ? `${diff} ${mapping[i].name}` : `${diff}${mapping[i].display}`
    }
  }
}