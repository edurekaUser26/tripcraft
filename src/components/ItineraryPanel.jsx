function ItineraryPanel({ children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold">Itinerary</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

export default ItineraryPanel