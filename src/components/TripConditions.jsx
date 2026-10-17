import { useEffect, useState } from 'react'
import { trip } from '../data/trip.js'

function TripConditions() {
  const [conditions, setConditions] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    async function loadConditions() {
      try {
        const countryUrl = `/restcountries/countries/v5/codes.alpha_2/${trip.countryCode}?response_fields=names.common,capitals,currencies,languages`
        const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${trip.latitude}&longitude=${trip.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3`

        const [countryResponse, forecastResponse] = await Promise.all([
          fetch(countryUrl, { signal }),
          fetch(forecastUrl, { signal }),
        ])
        if (!countryResponse.ok || !forecastResponse.ok) {
          throw new Error('A request failed')
        }

        const [countries, forecast] = await Promise.all([
          countryResponse.json(),
          forecastResponse.json(),
        ])
        setConditions({ country: countries.data.objects[0], daily: forecast.daily })
        setStatus('success')
      } catch (error) {
        if (error.name === 'AbortError') return
        setStatus('error')
      }
    }

    loadConditions()
    return () => controller.abort()
  }, [])

  if (status === 'loading') {
    return <p role="status" className="rounded-lg bg-white p-6 text-slate-500 shadow-sm">Loading country and weather…</p>
  }

  if (status === 'error') {
    return <p role="alert" className="rounded-lg bg-red-50 p-6 text-red-700">We couldn't load country and weather details.</p>
  }

  const { country, daily } = conditions
  const currency = country.currencies[0]
  const languages = country.languages.map((language) => language.name).join(', ')

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{country.names.common} at a glance</h2>
      <dl className="mt-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-500">Capital</dt>
          <dd>{country.capitals[0].name}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Currency</dt>
          <dd>{currency.name} ({currency.symbol})</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Languages</dt>
          <dd>{languages}</dd>
        </div>
      </dl>
      <h3 className="mt-4 font-semibold">Weather in {trip.destination}, next 3 days</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {daily.time.map((date, index) => (
          <li key={date} className="flex justify-between">
            <span>{date}</span>
            <span>{Math.round(daily.temperature_2m_min[index])}° – {Math.round(daily.temperature_2m_max[index])}°C</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TripConditions