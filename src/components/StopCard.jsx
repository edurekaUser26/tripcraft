import { useContext, useEffect, useRef } from 'react'
import Button from './Button.jsx'
import { TripContext } from '../features/trip/TripContext.jsx'

function StopCard({ id, dayNumber, time, name, booked, isNew = false, canMoveUp, canMoveDown }) {
  const { dispatch } = useContext(TripContext)
  const cardRef = useRef(null)

  useEffect(() => {
    if (isNew) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isNew])

  return (
    <li ref={cardRef} className={`rounded p-3 shadow-sm ${isNew ? 'bg-sky-50' : 'bg-white'}`}>
      <div className="flex gap-4">
        <span className="text-slate-500">{time}</span>
        <span className="flex-1">{name}</span>
        <span className={booked ? 'text-green-700' : 'text-slate-400'}>
          {booked ? 'Booked' : 'Not booked'}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button variant="secondary" disabled={!canMoveUp} aria-label={`Move ${name} up`} onClick={() => dispatch({ type: 'moved_stop', dayNumber, stopId: id, direction: 'up' })}>↑</Button>
        <Button variant="secondary" disabled={!canMoveDown} aria-label={`Move ${name} down`} onClick={() => dispatch({ type: 'moved_stop', dayNumber, stopId: id, direction: 'down' })}>↓</Button>
        <Button variant="secondary" onClick={() => dispatch({ type: 'edited_stop', stopId: id, changes: { booked: !booked } })}>
          {booked ? 'Mark not booked' : 'Mark booked'}
        </Button>
        <Button variant="secondary" aria-label={`Remove ${name}`} onClick={() => dispatch({ type: 'removed_stop', stopId: id })}>Remove</Button>
      </div>
    </li>
  )
}

export default StopCard