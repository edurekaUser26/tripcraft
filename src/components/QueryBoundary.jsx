import { Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import Button from './Button.jsx'

function QueryBoundary({ children, loadingMessage = 'Loading…' }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div role="alert" className="rounded-lg bg-red-50 p-6 text-red-700">
              <p>Something went wrong while loading this section.</p>
              <div className="mt-3">
                <Button onClick={resetErrorBoundary}>Try again</Button>
              </div>
            </div>
          )}
        >
          <Suspense
            fallback={
              <p role="status" className="rounded-lg bg-white p-6 text-slate-500 shadow-sm">
                {loadingMessage}
              </p>
            }
          >
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QueryBoundary
