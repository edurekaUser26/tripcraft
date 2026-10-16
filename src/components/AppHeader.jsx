import { Link, NavLink } from 'react-router'
import Button from './Button.jsx'

function AppHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-sky-700">TripCraft</Link>
        <nav aria-label="Main" className="flex items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'font-semibold text-sky-700' : 'text-slate-600 hover:text-sky-700')}
          >
            All trips
          </NavLink>
          <Button>New trip</Button>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader