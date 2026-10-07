import { trip, days } from '../data/trip.js'

function TripSummary() {
  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold">{trip.destination}</h1>

      <p className="mt-1 text-slate-600">
        {days.length} days · Starts {trip.startDate}
      </p>

      <p className="text-slate-600">
        {trip.travellers}{' '}
        {trip.travellers === 1 ? 'traveller' : 'travellers'}
      </p>

      {trip.notes && (
        <p className="mt-4 text-sm text-amber-700">
          Note: {trip.notes}
        </p>
      )}
    </section>
  )
}

export default TripSummary