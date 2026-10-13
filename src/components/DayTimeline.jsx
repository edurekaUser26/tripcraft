import StopCard from "./StopCard.jsx";

function DayTimeline({ days, lastAddedId }) {
  return (
    <ol className="space-y-6">
      {days.map((day) => (
        <li key={day.number}>
          <h3 className="font-semibold">Day {day.number}</h3>
          {day.stops.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {day.stops.map((stop, index) => (
                <StopCard
                  key={stop.id}
                  id={stop.id}
                  dayNumber={day.number}
                  time={stop.time}
                  name={stop.name}
                  booked={stop.booked}
                  isNew={stop.id === lastAddedId}
                  canMoveUp={index > 0}
                  canMoveDown={index < day.stops.length - 1}
                />
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-slate-500">No stops planned yet.</p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default DayTimeline;
