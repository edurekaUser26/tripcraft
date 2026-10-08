import { days } from '../data/trip.js'

function TripStats() {
  const stops = days.flatMap((day) => day.stops)
  const bookedCount = stops.filter((stop) => stop.booked).length

  const stats = [
    { label: 'Days', value: days.length },
    { label: 'Stops', value: stops.length },
    { label: 'Booked', value: bookedCount },
  ]

  return (
    <section
      aria-label="Trip stats"
      className="rounded-lg bg-white p-6 shadow-sm"
    >
      <dl className="grid grid-cols-3 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-slate-500">{stat.label}</dt>
            <dd className="mt-2 text-3xl font-bold text-slate-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default TripStats
