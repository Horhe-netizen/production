import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
const NotFoundPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles['not-found-page']}>
      <h1 className={styles['not-found-page__title']}>
        {t('Not Found Page')}
      </h1>
    </div>
  )
}

export default NotFoundPage
