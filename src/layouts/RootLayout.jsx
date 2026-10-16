import { Outlet } from 'react-router'
import AppHeader from '../components/AppHeader.jsx'

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout