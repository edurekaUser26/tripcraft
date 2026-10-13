import { useEffect, useState } from "react";
import { trip } from "../data/trip.js";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function DepartureCountdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, SECOND);
    return () => clearInterval(intervalId);
  }, []);

  const msLeft = Math.max(0, new Date(trip.departure).getTime() - now);
  const days = Math.floor(msLeft / DAY);
  const hours = Math.floor((msLeft % DAY) / HOUR);
  const minutes = Math.floor((msLeft % HOUR) / MINUTE);
  const seconds = Math.floor((msLeft % MINUTE) / SECOND);

  return (
    <section className="rounded-lg bg-sky-700 p-6 text-white shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-sky-100">
        Departure in
      </p>
      <p className="mt-2 text-2xl font-semibold tabular-nums">
        {days}d {hours}h {minutes}m {seconds}s
      </p>
    </section>
  );
}

export default DepartureCountdown;
