import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function TripsPage() {
  const [trips, setTrips] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadTrips() {
      try {
        const response = await fetch('/api/trips', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        setTrips(data)
        setStatus('success')
      } catch (error) {
        if (error.name === 'AbortError') return
        setStatus('error')
      }
    }

    loadTrips()
    return () => controller.abort()
  }, [])

  return (
    <section>
      <h1 className="text-2xl font-semibold">Your trips</h1>

      {status === 'loading' && (
        <p role="status" className="mt-6 text-slate-500">Loading trips…</p>
      )}

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded bg-red-50 p-4 text-red-700">
          We couldn't load your trips. Refresh the page to try again.
        </p>
      )}

      {status === 'success' && (
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
      )}
    </section>
  )
}

export default TripsPage