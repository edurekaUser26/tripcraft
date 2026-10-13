import { createContext, useReducer } from 'react'
import { tripReducer, initialTripState } from './tripReducer.js'

export const TripContext = createContext(null)

export function TripProvider({ children }) {
  const [state, dispatch] = useReducer(tripReducer, initialTripState)

  return <TripContext value={{ state, dispatch }}>{children}</TripContext>
}