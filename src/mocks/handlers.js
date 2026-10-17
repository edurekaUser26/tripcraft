import { http, HttpResponse, delay } from 'msw'

const trips = [
  { id: 'lisbon', destination: 'Lisbon', startDate: '12 May 2027' },
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
]