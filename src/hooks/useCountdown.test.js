import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCountdown } from './useCountdown.js'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-05-12T08:59:50'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('counts down as time passes', () => {
    const { result } = renderHook(() => useCountdown('2027-05-12T09:00:00'))
    expect(result.current).toBe(10000)

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(result.current).toBe(7000)
  })

  it('stops its timer when unmounted', () => {
    const { unmount } = renderHook(() => useCountdown('2027-05-12T09:00:00'))
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})