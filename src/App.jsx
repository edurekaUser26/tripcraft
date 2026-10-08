import AppHeader from "./components/AppHeader.jsx";
import TripSummary from "./components/TripSummary.jsx";
import DayTimeline from "./components/DayTimeline.jsx";
import TripStats from "./components/TripStats.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto grid max-w-5xl items-start gap-6 px-4 py-8 md:grid-cols-3">
        <div className="md:col-span-3">
          <TripStats />
        </div>

        <TripSummary />

        <div className="md:col-span-2">
          <DayTimeline />
        </div>
      </main>
    </div>
  );
}

export default App;
