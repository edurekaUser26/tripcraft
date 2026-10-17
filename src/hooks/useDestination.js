import { useSuspenseQueries } from '@tanstack/react-query'
import { fetchJson } from '../api/fetchJson.js'

export function useDestination({ countryCode, latitude, longitude }) {
  const [countryQuery, forecastQuery] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['country', countryCode],
        queryFn: ({ signal }) =>
          fetchJson(`/restcountries/countries/v5/codes.alpha_2/${countryCode}?response_fields=names.common,capitals,currencies,languages`, { signal }),
        select: (response) => response.data.objects[0],
      },
      {
        queryKey: ['forecast', latitude, longitude],
        queryFn: ({ signal }) =>
          fetchJson(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3`, { signal }),
        select: (forecast) => forecast.daily,
      },
    ],
  })

  return { country: countryQuery.data, daily: forecastQuery.data }
}