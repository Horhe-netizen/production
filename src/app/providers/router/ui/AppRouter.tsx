import { routeConfig } from '@src/shared/config/route-config/routeConfig'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { PageLoader } from '@src/features/PageLoader/PageLoader'

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((routeProps) => <Route key={routeProps.path} {...routeProps} />)}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
