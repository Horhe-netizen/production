import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles['not-found-page']}>
      { t('Page was not found') }
    </div>
  )
}
