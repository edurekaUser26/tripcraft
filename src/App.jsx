import { Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import TripsPage from './pages/TripsPage.jsx'
import TripPage from './pages/TripPage.jsx'
import DestinationPage from './pages/DestinationPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<TripsPage />} />
        <Route path="trips/:tripId">
          <Route index element={<TripPage />} />
          <Route path="destinations/:destinationId" element={<DestinationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App