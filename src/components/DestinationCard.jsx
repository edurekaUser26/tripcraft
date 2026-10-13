import Button from "./Button.jsx";

function DestinationCard({ name, country, summary, nights = 1 }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-slate-500">
        {country} · {nights} {nights === 1 ? "night" : "nights"}
      </p>
      <p className="mt-2 text-slate-600">{summary}</p>
      <div className="mt-4">
        <Button variant="secondary">View details</Button>
      </div>
    </article>
  );
}

export default DestinationCard;
