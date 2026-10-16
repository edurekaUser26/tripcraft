import { destinations } from "../data/trip.js";
import DestinationCard from "./DestinationCard.jsx";

function DestinationList() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Destinations</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <li key={destination.id}>
            <DestinationCard
              id={destination.id}
              name={destination.name}
              country={destination.country}
              summary={destination.summary}
              nights={destination.nights}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DestinationList;
