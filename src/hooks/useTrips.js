import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchJson } from '../api/fetchJson.js'

export function useTrips() {
  return useSuspenseQuery({
    queryKey: ['trips'],
    queryFn: ({ signal }) => fetchJson('/api/trips', { signal }),
  })
}
