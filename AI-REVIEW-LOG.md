# AI Review Log

## Week 1: SavedPlaces.jsx (provided Claude Code output)

| # | Issue found | Week 1 concept | Correction |
|---|---|---|---|
| 1 | Class component with render() | Function components | Rewrote as a function component |
| 2 | Inline style objects | Tailwind as the single styling approach | Replaced with Tailwind classes |
| 3 | Heading and lists built from divs | Semantic markup | Used section, h2, h3, ul, and li |
| 4 | Index used as key; tags had no key | Lists with stable keys | key={place.id} and key={tag} |
| 5 | img had no alt text | Accessibility: alt text | Added imageAlt to the data |
| 6 | Input had only a placeholder | Accessibility: form labels | Added a label linked with htmlFor |

## Week 2: useCountdown and useLocalStorage (Claude Code extraction)

| # | Issue found | Week 2 concept | Correction |
|---|---|---|---|
| 1 | Interval callback used msLeft from the first render, so the countdown froze | Stale closures | Recalculate from targetDate on each tick; added targetDate to the dependency array |
| 2 | setInterval was never cleared | Effect cleanup | Returned () => clearInterval(intervalId) |
| 3 | useLocalStorage reads storage once with a lazy initializer and saves on change | Confirmed correct | No change needed |

## Week 3: TanStack Query migration (Claude Code, plan mode)

| # | Change | Decision | Reason |
|---|---|---|---|
| 1 | QueryClient in main.jsx, outside components | Accepted | One shared cache for the whole app |
| 2 | useTrips with signal and key ['trips'] | Accepted | Matches the plan; cancellation built in |
| 3 | useDestination with two useSuspenseQuery calls | Rejected, corrected | Caused a request waterfall; changed to useSuspenseQueries |
| 4 | QueryBoundary with reset wired to Try again | Accepted | Retry resets both the boundary and the query |