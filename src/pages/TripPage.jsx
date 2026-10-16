import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import TripSummary from '../components/TripSummary.jsx'
import DayTimeline from '../components/DayTimeline.jsx'
import TripStats from '../components/TripStats.jsx'
import SavedPlaces from '../components/SavedPlaces.jsx'
import DestinationList from '../components/DestinationList.jsx'
import ItineraryPanel from '../components/ItineraryPanel.jsx'
import AddStopForm from '../components/AddStopForm.jsx'
import DayFilter from '../components/DayFilter.jsx'
import DepartureCountdown from '../components/DepartureCountdown.jsx'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { trip } from '../data/trip.js'
import { TripContext } from '../features/trip/TripContext.jsx'
import NotFoundPage from './NotFoundPage.jsx'

function TripPage() {
  const { tripId } = useParams()
  const { state } = useContext(TripContext)
  const itinerary = state.days
  const [selectedDay, setSelectedDay] = useLocalStorage('tripcraft:selectedDay', 'all')

  const visibleDays =
    selectedDay === 'all'
      ? itinerary
      : itinerary.filter((day) => day.number === Number(selectedDay))

  const stopCount = itinerary.flatMap((day) => day.stops).length

  useEffect(() => {
    document.title = `${trip.destination}: ${stopCount} stops | TripCraft`
  }, [stopCount])

  if (tripId !== trip.id) {
    return <NotFoundPage message="We couldn't find that trip." />
  }

  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
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
          <AddStopForm days={itinerary} />
          <DayFilter days={itinerary} selectedDay={selectedDay} onSelectDay={setSelectedDay} />
          <DayTimeline days={visibleDays} lastAddedId={state.lastAddedId} />
        </ItineraryPanel>
      </div>
      <div className="md:col-span-3">
        <DestinationList />
      </div>
    </div>
  )
}

export default TripPage