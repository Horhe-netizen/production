import classNames from '@src/shared/lib/classNames/classNames'
import styles from './AppButton.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum AppButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  theme: AppButtonTheme
};

const AppButton = (props: AppButtonProps) => {
  const { children, className, theme, ...buttonProps } = props

  return (
    <button className={classNames(styles['app-button'], {}, [className, styles[theme]])} {...buttonProps}>
      {children}
    </button>
  )
}

export default AppButton
