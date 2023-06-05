import { routeConfig } from '@src/shared/config/routeConfig/routeConfig'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const AppRouter = () => {
  const { t, i18n } = useTranslation()

  return (
    <Suspense fallback={<div>...{t('Loading')}</div>}>
      <Routes>
        {
          Object.values(routeConfig)
            .map((routeProps) => <Route key={routeProps.path} {...routeProps} />)
        }
      </Routes>
    </Suspense>
  )
}

export default AppRouter
