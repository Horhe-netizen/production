import AppButton from '@src/shared/ui/AppButton/AppButton'

import { useTranslation } from 'react-i18next'
import classNames from '@src/shared/lib/classNames/classNames'

import styles from './ErrorFallback.module.scss'

interface ErrorFallbackProps {
  className?: string
};

const ErrorFallback = ({ className }: ErrorFallbackProps) => {
  const { t, i18n } = useTranslation()

  function reloadPage () {
    location.reload()
  }

  return (
    <div className={classNames(styles['error-fallback'], {}, [className ?? ''])}>
      <h1 className={styles['error-fallback__title']}>{t('Something went wrong')}</h1>
      <AppButton onClick={reloadPage}>
        {t('Reload page')}
      </AppButton>
    </div>
  )
}

export default ErrorFallback
