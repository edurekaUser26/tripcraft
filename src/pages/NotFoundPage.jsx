import { Link, useNavigate } from 'react-router'
import Button from '../components/Button.jsx'

function NotFoundPage({ message = "We couldn't find that page." }) {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-md py-16 text-center">
      <h1 className="text-2xl font-semibold">Not found</h1>
      <p className="mt-2 text-slate-600">{message}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button variant="secondary" onClick={() => navigate(-1)}>Go back</Button>
        <Link to="/" className="rounded bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800">All trips</Link>
      </div>
    </section>
  )
}

export default NotFoundPage