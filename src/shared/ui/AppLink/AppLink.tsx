import { type LinkProps, NavLink } from 'react-router-dom'
import classNames from '@src/shared/lib/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  children: React.ReactNode
  theme?: AppLinkTheme
}

const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...linkProps
  } = props

  return (
    <NavLink
      to={to}
      className={classNames(styles['app-link'], {}, [styles[theme], className])}
      {...linkProps}
    >
      {children}
    </NavLink>
  )
}

export default AppLink
