import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import TripSummary from "./components/TripSummary.jsx";
import DayTimeline from "./components/DayTimeline.jsx";
import TripStats from "./components/TripStats.jsx";
import SavedPlaces from "./components/SavedPlaces.jsx";
import DestinationList from "./components/DestinationList.jsx";
import ItineraryPanel from "./components/ItineraryPanel.jsx";
import AddStopForm from "./components/AddStopForm.jsx";
import DayFilter from "./components/DayFilter.jsx";
import DepartureCountdown from "./components/DepartureCountdown.jsx";
import { days, trip } from "./data/trip.js";

function App() {
  const [itinerary, setItinerary] = useState(days);
  const [selectedDay, setSelectedDay] = useState("all");
  const [lastAddedId, setLastAddedId] = useState(null);
  function handleAddStop(dayNumber, newStop) {
    setItinerary(
      itinerary.map((day) =>
        day.number === dayNumber
          ? { ...day, stops: [...day.stops, newStop] }
          : day,
      ),
    );
    setLastAddedId(newStop.id);
  }
  const visibleDays =
    selectedDay === "all"
      ? itinerary
      : itinerary.filter((day) => day.number === Number(selectedDay));
  const stopCount = itinerary.flatMap((day) => day.stops).length;

  useEffect(() => {
    document.title = `${trip.destination}: ${stopCount} stops | TripCraft`;
  }, [stopCount]);
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto grid max-w-5xl items-start gap-6 px-4 py-8 md:grid-cols-3">
        <div className="md:col-span-3">
          <TripStats itinerary={itinerary} />
        </div>

        <div className="space-y-6">
          <DepartureCountdown />
          <TripSummary />
          <SavedPlaces />
        </div>

        <div className="md:col-span-2">
          <ItineraryPanel>
            <AddStopForm days={itinerary} onAddStop={handleAddStop} />
            <DayFilter
              days={itinerary}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />
            <DayTimeline days={visibleDays} lastAddedId={lastAddedId} />
          </ItineraryPanel>
        </div>

        <div className="md:col-span-3">
          <DestinationList />
        </div>
      </main>
    </div>
  );
}

export default App;
