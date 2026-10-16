import { http, HttpResponse, delay } from 'msw'

const trips = [
  {
    id: 'lisbon',
    destination: 'Lisbon',
    startDate: '12 May 2027',
  },
]

function shouldFail() {
  return localStorage.getItem('mock:fail') === 'true'
}

export const handlers = [
  // Country information
  http.get('/api/countries/alpha/:code', () => {
    return HttpResponse.json({
      name: { common: 'Portugal' },
      capital: ['Lisbon'],
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      languages: {
        por: 'Portuguese',
      },
    })
  }),

  // Weather information (sample temperatures)
  http.get('/api/weather', () => {
    const today = new Date()

    const dates = Array.from({ length: 3 }, (_, index) => {
      const date = new Date(today)
      date.setDate(today.getDate() + index)
      return [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0'),
      ].join('-')
    })

    return HttpResponse.json({
      daily: {
        time: dates,
        temperature_2m_max: [23, 24, 22],
        temperature_2m_min: [15, 16, 14],
      },
    })
  }),

  // Existing trips handler
  http.get('/api/trips', async () => {
    await delay(800)

    if (shouldFail()) {
      return HttpResponse.json(
        { message: 'Server error' },
        { status: 500 }
      )
    }

    return HttpResponse.json(trips)
  }),

  // Existing individual trip handler
  http.get('/api/trips/:tripId', async ({ params }) => {
    await delay(800)

    if (shouldFail()) {
      return HttpResponse.json(
        { message: 'Server error' },
        { status: 500 }
      )
    }

    const trip = trips.find(
      (item) => item.id === params.tripId
    )

    if (!trip) {
      return HttpResponse.json(
        { message: 'Trip not found' },
        { status: 404 }
      )
    }

    return HttpResponse.json(trip)
  }),
]
