import classNames from '@src/shared/lib/classNames/classNames'
import { Loader } from '@src/shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className ?? ''])}>
    <Loader />
  </div>
)
