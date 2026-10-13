import { days } from "../data/trip.js";
import StopCard from "./StopCard.jsx";

function DayTimeline() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Itinerary</h2>

      <ol className="mt-4 space-y-6">
        {days.map((day) => (
          <li key={day.number}>
            <h3 className="font-semibold">Day {day.number}</h3>

            {day.stops.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {day.stops.map((stop) => (
                  <StopCard
                    key={stop.id}
                    time={stop.time}
                    name={stop.name}
                    booked={stop.booked}
                  />
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-slate-500">
                No stops planned yet.
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default DayTimeline;
