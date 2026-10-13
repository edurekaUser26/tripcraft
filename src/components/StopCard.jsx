import { useEffect, useRef } from 'react'

function StopCard({ time, name, booked, isNew = false }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (isNew) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isNew])

  return (
    <li ref={cardRef} className={`flex gap-4 rounded p-3 shadow-sm ${isNew ? 'bg-sky-50' : 'bg-white'}`}>
      <span className="text-slate-500">{time}</span>
      <span className="flex-1">{name}</span>
      <span className={booked ? 'text-green-700' : 'text-slate-400'}>
        {booked ? 'Booked' : 'Not booked'}
      </span>
    </li>
  )
}

export default StopCard