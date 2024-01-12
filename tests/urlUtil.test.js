import { expect, test } from 'vitest'
import { getHostname } from '../src/lib/urlUtil.js'

test('resolve hostname for url', () => {
  const url = 'https://mozilla.org?foo=bar'
  expect(getHostname(url)).toBe('mozilla.org')
})
