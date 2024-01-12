import { expect, test } from 'vitest'
import { trans } from '../src/lib/translate.js'

test('translates full time properly', () => {
  expect(trans("FT")).toBe('Full Time')
})

test('translates part time properly', () => {
  expect(trans("PT")).toBe('Part Time')
})

test('translates freelance properly', () => {
  expect(trans("FR")).toBe('Freelance')
})

test('translate not found is empty string', () => {
  expect(trans("FOO")).toBe('')
})
