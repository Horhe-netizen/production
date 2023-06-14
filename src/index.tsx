import { ThemeProvider } from '@src/app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '@src/app/providers/ErrorBoundary'
import App from './app/App'

import { createRoot } from 'react-dom/client'
import '@src/shared/config/i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
