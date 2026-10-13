function StopCard({ time, name, booked }) {
  return (
    <li className="flex gap-4 rounded bg-white p-3 shadow-sm">
      <span className="text-slate-500">{time}</span>
      <span className="flex-1">{name}</span>
      <span className={booked ? 'text-green-700' : 'text-slate-400'}>
        {booked ? 'Booked' : 'Not booked'}
      </span>
    </li>
  )
}

export default StopCard