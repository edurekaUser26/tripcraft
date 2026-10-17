import QueryBoundary from '../components/QueryBoundary.jsx'
import TripsSection from '../components/TripsSection.jsx'

function TripsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Your trips</h1>
      <QueryBoundary loadingMessage="Loading trips…">
        <TripsSection />
      </QueryBoundary>
    </section>
  )
}

export default TripsPage