import { expect, test } from 'vitest'
import getTimeAgo from '../src/lib/dateUtil.js'

test('difference in minutes', () => {
  let date = new Date('2024-01-10T03:00:00Z')
  let now = new Date('2024-01-10T03:15:00.00Z')
  expect(getTimeAgo(date, {now})).toBe('15m')
})

test('difference in hours', () => {
  let date = new Date('2024-01-10T03:00:00Z')
  let now = new Date('2024-01-10T06:15:00.00Z')
  expect(getTimeAgo(date, {now})).toBe('3h')
})

test('difference in days', () => {
  let date = new Date('2024-01-10T03:00:00Z')
  let now = new Date('2024-01-20T15:00:00.00Z')
  expect(getTimeAgo(date, { now })).toBe('10d')
})

test('difference in months', () => {
  let date = new Date('2023-01-10T15:00:00Z')
  let now = new Date('2023-09-12T15:00:00Z')
  expect(getTimeAgo(date, { now })).toBe('8m')
})

test('difference in years', () => {
  let date = new Date('2021-01-10T03:00:00Z')
  let now = new Date('2023-01-12T03:00:00.00Z')
  expect(getTimeAgo(date, { now })).toBe('2y')
})

test('long display option', () => {
  let date = new Date('2021-01-10T03:00:00Z')
  let now = new Date('2023-01-12T03:00:00.00Z')
  expect(getTimeAgo(date, { now, display: 'long' })).toBe('2 years')
})
