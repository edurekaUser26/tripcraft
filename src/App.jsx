const trip = {
  destination: "Lisbon",
  startDate: "12 May 2027",
  travellers: 2,
  notes: "Pack comfortable shoes for the hills.",
};

const days = [
  {
    number: 1,
    stops: [
      { id: "belem-tower", time: "09:00", name: "Belém Tower", booked: true },
      {
        id: "time-out-market",
        time: "13:00",
        name: "Time Out Market",
        booked: false,
      },
    ],
  },
  {
    number: 2,
    stops: [
      {
        id: "alfama-walk",
        time: "10:00",
        name: "Alfama walking tour",
        booked: true,
      },
    ],
  },
  { number: 3, stops: [] },
];
function App() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 p-8">
        <h1 className="text-3xl font-bold text-sky-700">TripCraft</h1>
        <h2 className="mt-4 text-xl font-semibold">{trip.destination}</h2>
        <p className="text-slate-600">
          Starts {trip.startDate} · {trip.travellers}{" "}
          {trip.travellers === 1 ? "traveller" : "travellers"}
        </p>
        {trip.notes && (
          <p className="mt-2 text-sm text-amber-700">Note: {trip.notes}</p>
        )}

        <ol className="mt-6 space-y-6">
          {days.map((day) => (
            <li key={day.number}>
              <h3 className="font-semibold">Day {day.number}</h3>
              {day.stops.length > 0 ? (
                <ul className="mt-2 space-y-2">
                  {day.stops.map((stop) => (
                    <li
                      key={stop.id}
                      className="flex gap-4 rounded bg-white p-3 shadow-sm"
                    >
                      <span className="text-slate-500">{stop.time}</span>
                      <span className="flex-1">{stop.name}</span>
                      <span
                        className={
                          stop.booked ? "text-green-700" : "text-slate-400"
                        }
                      >
                        {stop.booked ? "Booked" : "Not booked"}
                      </span>
                    </li>
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
      </main>
    </>
  );
}

export default App;
