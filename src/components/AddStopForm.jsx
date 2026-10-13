import { useContext, useRef, useState } from "react";
import Button from "./Button.jsx";
import { TripContext } from "../features/trip/TripContext.jsx";

const emptyForm = { name: "", time: "", day: "1" };

function AddStopForm({ days }) {
  const { dispatch } = useContext(TripContext);
  const [form, setForm] = useState(emptyForm);
  const nameInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "added_stop",
      dayNumber: Number(form.day),
      stop: {
        id: crypto.randomUUID(),
        time: form.time,
        name: form.name,
        booked: false,
      },
    });
    setForm({ ...emptyForm, day: form.day });
    nameInputRef.current.focus({ preventScroll: true });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-lg bg-white p-4 shadow-sm sm:grid-cols-4 sm:items-end"
    >
      <div className="sm:col-span-2">
        <label htmlFor="stop-name" className="block text-sm font-medium">
          Stop name
        </label>
        <input
          ref={nameInputRef}
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
          {days.map((day) => (
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
  );
}

export default AddStopForm;
