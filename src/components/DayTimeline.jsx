import { useState } from "react";
import { days } from "../data/trip.js";
import StopCard from "./StopCard.jsx";
import Button from "./Button.jsx";
const emptyForm = { name: "", time: "", day: "1" };

function DayTimeline() {
  const [itinerary, setItinerary] = useState(days);
  const [form, setForm] = useState(emptyForm);
  function handleSubmit(event) {
    event.preventDefault();

    const newStop = {
      id: crypto.randomUUID(),
      time: form.time,
      name: form.name,
      booked: false,
    };

    setItinerary(
      itinerary.map((day) =>
        day.number === Number(form.day)
          ? { ...day, stops: [...day.stops, newStop] }
          : day,
      ),
    );
    setForm({ ...emptyForm, day: form.day });
  }
  return (
    <section>
      <h2 className="text-xl font-semibold">Itinerary</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-4 grid gap-3 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-4 sm:items-end"
      >
        <div className="sm:col-span-2">
          <label htmlFor="stop-name" className="block text-sm font-medium">
            Stop name
          </label>
          <input
            id="stop-name"
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="stop-time" className="block text-sm font-medium">
            Time
          </label>
          <input
            id="stop-time"
            type="time"
            required
            value={form.time}
            onChange={(event) => setForm({ ...form, time: event.target.value })}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="stop-day" className="block text-sm font-medium">
            Day
          </label>
          <select
            id="stop-day"
            value={form.day}
            onChange={(event) => setForm({ ...form, day: event.target.value })}
            className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
          >
            {itinerary.map((day) => (
              <option key={day.number} value={day.number}>
                Day {day.number}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-4">
          <Button type="submit">Add stop</Button>
        </div>
      </form>

      <ol className="mt-6 space-y-6">
        {itinerary.map((day) => (
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
