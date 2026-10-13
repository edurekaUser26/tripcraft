function DayFilter({ days, selectedDay, onSelectDay }) {
  return (
    <div>
      <label htmlFor="day-filter" className="block text-sm font-medium">Show</label>
      <select id="day-filter" value={selectedDay} onChange={(event) => onSelectDay(event.target.value)} className="mt-1 rounded border border-slate-300 px-3 py-2">
        <option value="all">All days</option>
        {days.map((day) => (
          <option key={day.number} value={day.number}>Day {day.number}</option>
        ))}
      </select>
    </div>
  )
}

export default DayFilter