import { Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import Button from './Button.jsx'

function QueryBoundary({ children, loadingMessage }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div role="alert" className="rounded-lg bg-red-50 p-4 text-red-700">
              <p>Something went wrong while loading this section.</p>
              <div className="mt-3">
                <Button variant="secondary" onClick={resetErrorBoundary}>Try again</Button>
              </div>
            </div>
          )}
        >
          <Suspense fallback={<p role="status" className="text-slate-500">{loadingMessage}</p>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QueryBoundary