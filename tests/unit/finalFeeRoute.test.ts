import { describe, expect, it } from 'vitest'
import { normalizeFinalFeeSide } from '@/app/api/trading/final-fee/route'

describe('normalizeFinalFeeSide', () => {
  it('accepts enum and numeric order sides', () => {
    expect(normalizeFinalFeeSide('BUY')).toBe('BUY')
    expect(normalizeFinalFeeSide('buy')).toBe('BUY')
    expect(normalizeFinalFeeSide('0')).toBe('BUY')
    expect(normalizeFinalFeeSide('SELL')).toBe('SELL')
    expect(normalizeFinalFeeSide('sell')).toBe('SELL')
    expect(normalizeFinalFeeSide('1')).toBe('SELL')
  })

  it('rejects unknown sides', () => {
    expect(normalizeFinalFeeSide(null)).toBeNull()
    expect(normalizeFinalFeeSide('')).toBeNull()
    expect(normalizeFinalFeeSide('2')).toBeNull()
    expect(normalizeFinalFeeSide('BID')).toBeNull()
  })
})
