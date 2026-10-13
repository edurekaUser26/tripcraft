import { savedPlaces } from '../data/trip.js'

function SavedPlaces() {
  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Saved places</h2>
      <label htmlFor="place-filter" className="mt-4 block text-sm font-medium">
        Filter saved places
      </label>

      <input
        id="place-filter"
        type="search"
        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
      />
      <ul className="mt-4 space-y-3">
        {savedPlaces.map((place) => (
          <li key={place.id} className="flex gap-3">
            <img
              src={place.image}
              alt={place.imageAlt}
              className="size-16 rounded object-cover"
            />
            <div>
              <h3 className="font-semibold">{place.name}</h3>
              <ul className="mt-1 flex gap-2">
                {place.tags.map((tag) => (
                  <li key={tag} className="rounded bg-slate-100 px-2 text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SavedPlaces
