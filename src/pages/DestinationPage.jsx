import { Link, useParams } from 'react-router'
import { destinations, trip } from '../data/trip.js'
import NotFoundPage from './NotFoundPage.jsx'

function DestinationPage() {
  const { tripId, destinationId } = useParams()
  const destination = destinations.find((item) => item.id === destinationId)

  if (tripId !== trip.id || !destination) {
    return <NotFoundPage message="We couldn't find that destination." />
  }

  const nights = destination.nights ?? 1

  return (
    <article className="rounded-lg bg-white p-6 shadow-sm">
      <Link to=".." className="text-sm text-sky-700 hover:underline">← Back to {trip.destination} trip</Link>
      <h1 className="mt-4 text-2xl font-semibold">{destination.name}</h1>
      <p className="text-slate-500">
        {destination.country} · {nights} {nights === 1 ? 'night' : 'nights'}
      </p>
      <p className="mt-4 text-slate-600">{destination.summary}</p>
    </article>
  )
}

export default DestinationPage