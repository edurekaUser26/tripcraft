import { Link } from "react-router";
function DestinationCard({ id, name, country, summary, nights = 1 }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-slate-500">
        {country} · {nights} {nights === 1 ? "night" : "nights"}
      </p>
      <p className="mt-2 text-slate-600">{summary}</p>
      <div className="mt-4">
        <Link
          to={`destinations/${id}`}
          className="inline-block rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          View details<span className="sr-only"> about {name}</span>
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;
