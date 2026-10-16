import { Link } from 'react-router'
import { trips } from '../data/trip.js'

function TripsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Your trips</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`} className="block rounded-lg bg-white p-5 shadow-sm hover:ring-2 hover:ring-sky-700">
              <h2 className="text-lg font-semibold">{trip.destination}</h2>
              <p className="text-sm text-slate-500">Starts {trip.startDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TripsPage