import { http, HttpResponse, delay } from 'msw'

const trips = [
  { id: 'lisbon', destination: 'Lisbon', startDate: '2027-05-12' },
]

function shouldFail() {
  return localStorage.getItem('mock:fail') === 'true'
}

export const handlers = [
  http.get('/api/trips', async () => {
    await delay(800)
    if (shouldFail()) {
      return HttpResponse.json({ message: 'Server error' }, { status: 500 })
    }
    return HttpResponse.json(trips)
  }),

  http.get('/api/trips/:tripId', async ({ params }) => {
    await delay(800)
    if (shouldFail()) {
      return HttpResponse.json({ message: 'Server error' }, { status: 500 })
    }
    const trip = trips.find((item) => item.id === params.tripId)
    if (!trip) {
      return HttpResponse.json({ message: 'Trip not found' }, { status: 404 })
    }
    return HttpResponse.json(trip)
  }),

  http.post('/api/trips', async ({ request }) => {
    await delay(1200)
    if (shouldFail()) {
      return HttpResponse.json({ message: 'Could not save the trip' }, { status: 500 })
    }
    const body = await request.json()
    const newTrip = { id: crypto.randomUUID(), ...body }
    trips.push(newTrip)
    return HttpResponse.json(newTrip, { status: 201 })
  }),
]