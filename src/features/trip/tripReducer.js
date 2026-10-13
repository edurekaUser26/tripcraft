import { days } from '../../data/trip.js'

export const initialTripState = { days, lastAddedId: null }

export function tripReducer(state, action) {
  switch (action.type) {
    case 'added_stop':
      return {
        days: state.days.map((day) =>
          day.number === action.dayNumber
            ? { ...day, stops: [...day.stops, action.stop] }
            : day
        ),
        lastAddedId: action.stop.id,
      }

    case 'edited_stop':
      return {
        ...state,
        days: state.days.map((day) => ({
          ...day,
          stops: day.stops.map((stop) =>
            stop.id === action.stopId ? { ...stop, ...action.changes } : stop
          ),
        })),
      }

    case 'moved_stop':
      return {
        ...state,
        days: state.days.map((day) => {
          if (day.number !== action.dayNumber) return day
          const index = day.stops.findIndex((stop) => stop.id === action.stopId)
          const target = action.direction === 'up' ? index - 1 : index + 1
          if (index === -1 || target < 0 || target >= day.stops.length) return day
          const stops = [...day.stops]
          const [moved] = stops.splice(index, 1)
          stops.splice(target, 0, moved)
          return { ...day, stops }
        }),
      }

    case 'removed_stop':
      return {
        ...state,
        days: state.days.map((day) => ({
          ...day,
          stops: day.stops.filter((stop) => stop.id !== action.stopId),
        })),
      }

    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}