import { trip } from "../data/trip.js";
import { useDestination } from "../hooks/useDestination.js";

function TripConditions() {
  const { country, daily } = useDestination({
    countryCode: trip.countryCode,
    latitude: trip.latitude,
    longitude: trip.longitude,
  });
  const currency = Object.values(country.currencies)[0];
  const languages = Object.values(country.languages).join(", ");

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">
        {country.name.common} at a glance
      </h2>

      <dl className="mt-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-500">Capital</dt>
          <dd>{country.capital[0]}</dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-slate-500">Currency</dt>
          <dd>
            {currency.name} ({currency.symbol})
          </dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-slate-500">Languages</dt>
          <dd>{languages}</dd>
        </div>
      </dl>

      <h3 className="mt-4 font-semibold">
        Weather in {trip.destination}, next 3 days
      </h3>

      <ul className="mt-2 space-y-1 text-sm">
        {daily.time.map((date, index) => (
          <li key={date} className="flex justify-between">
            <span>{date}</span>
            <span>
              {Math.round(daily.temperature_2m_min[index])}°{" – "}
              {Math.round(daily.temperature_2m_max[index])}°C
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TripConditions;
