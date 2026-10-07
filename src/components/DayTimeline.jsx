import { days } from '../data/trip.js'

function DayTimeline() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Itinerary</h2>

      <ol className="mt-4 space-y-6">
        {days.map((day) => (
          <li key={day.number}>
            <h3 className="font-semibold">Day {day.number}</h3>

            {day.stops.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {day.stops.map((stop) => (
                  <li
                    key={stop.id}
                    className="flex gap-4 rounded bg-white p-3 shadow-sm"
                  >
                    <span className="text-slate-500">{stop.time}</span>
                    <span className="flex-1">{stop.name}</span>
                    <span
                      className={
                        stop.booked
                          ? 'text-green-700'
                          : 'text-slate-400'
                      }
                    >
                      {stop.booked ? 'Booked' : 'Not booked'}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-slate-500">
                No stops planned yet.
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default DayTimeline