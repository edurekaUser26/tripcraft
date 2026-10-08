# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: start the Vite dev server with HMR
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the production build locally
- `npm run lint`: run ESLint over the project

There is no test runner configured yet.

## Stack

- React 19 with plain JavaScript/JSX (no TypeScript). Entry is `index.html` → `src/main.jsx` → `src/App.jsx`, rendered inside `StrictMode`.
- Vite 8 with `@vitejs/plugin-react`.
- Tailwind CSS v4 through the `@tailwindcss/vite` plugin. There is no `tailwind.config.js` or PostCSS config; `src/index.css` contains only `@import "tailwindcss";`. All styling is Tailwind utility classes inline in JSX, with no custom CSS.
- ESLint flat config (`eslint.config.js`) with `react-hooks` and `react-refresh` (Vite preset) rules. Because of `react-refresh`, a component file should export only components.

## Architecture

TripCraft is a trip itinerary viewer. It has no state, routing, or backend yet.

- `src/data/trip.js` is the single source of data. It exports `trip` (destination, start date, traveller count, notes) and `days` (an array of `{ number, stops: [{ id, time, name, booked }] }`).
- Components in `src/components/` import that data directly instead of receiving it as props. `TripSummary` reads `trip` and `days`, and `DayTimeline` reads `days`. If data needs to become dynamic, lift it into `App` and pass it down as props.
- `App.jsx` handles only layout: a full-width `AppHeader`, then a responsive grid in which `TripSummary` takes one column and `DayTimeline` spans two at `md:` and above. On smaller screens they stack.
- List keys use `day.number` for days and `stop.id` (a kebab-case slug) for stops. A new stop needs a unique `id`.

## Conventions

- Function components with `export default` at the bottom of the file. Imports include the explicit `.jsx`/`.js` extension.
- Empty and conditional states are handled inline: a ternary for an empty stops list, `&&` for optional notes, and singular/plural text for traveller count.
- Quote style is mixed: `App.jsx` uses double quotes and semicolons, while the other files use single quotes and no semicolons. There is no Prettier config, so match the style of the file you are editing.

## Accessibility
- Use semantic HTML: header, main, section, headings in order, lists for lists, dl/dt/dd for label-value pairs
- Every img has meaningful alt text (alt="" only if decorative)
- Every form input has a visible label
