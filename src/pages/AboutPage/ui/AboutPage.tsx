import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t, i18n } = useTranslation('about')

  return (
    <h1>{t('About page')}</h1>
  )
}

export default AboutPage
