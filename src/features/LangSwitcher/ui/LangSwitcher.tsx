import AppButton, { AppButtonTheme } from '@src/shared/ui/AppButton/AppButton'

import { useTranslation } from 'react-i18next'
import classNames from '@src/shared/lib/classNames/classNames'

import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
};

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  function toggle () {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <AppButton
      className={classNames(styles['lang-switcher'], {}, [className ?? ''])}
      theme={AppButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t('Lang')}
    </AppButton>
  )
}

export default LangSwitcher
