import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TripProvider } from './features/trip/TripContext.jsx'
import { BrowserRouter } from 'react-router'

async function enableMocking() {
  if (!import.meta.env.DEV) return
  const { worker } = await import('./mocks/browser.js')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <TripProvider>
          <App />
        </TripProvider>
      </BrowserRouter>
    </StrictMode>,
  )
})