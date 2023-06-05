import { AppRouter } from './providers/router'
import { Header } from '@src/widgets/Header'
import { Sidebar } from '@src/widgets/Sidebar'

import classNames from '@src/shared/lib/classNames/classNames'
import { useTheme } from '@src/app/providers/ThemeProvider'

import './styles/index.scss'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const Component = () => {
  const { t, i18n } = useTranslation()

  function toggle () {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <button onClick={toggle}>{t('Translate')}</button>
      {t('Test example')}
    </div>
  )
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Sidebar />
        <div className="app__content">
          <Component />
          <Header />
          <div className="app__page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
