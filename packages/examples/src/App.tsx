import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactRouterView from '@jackgreen/react-router-view'
import routes from 'src/routes'
import myLib from 'mylib'

myLib()

const Loading: React.FC = () => {
  return <div style={{ display: 'none' }}>Loading...</div>
}

// eslint-disable-next-line
export default function App(props: any): JSX.Element {
  return (
    <BrowserRouter basename={`/${import.meta.env.VITE_APP_NAME as string}`}>
      <Suspense fallback={<Loading />}>
        <ReactRouterView {...props} routes={routes} />
      </Suspense>
    </BrowserRouter>
  )
}
