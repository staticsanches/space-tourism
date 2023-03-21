import classes from './IndexedTitle.module.scss'

export type IndexedTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  index: React.ReactNode
}

export const IndexedTitle = ({
  index,
  children,
  className,
  ...otherProps
}: IndexedTitleProps) => (
  <h2
    className={classes.indexedTitle + ' ' + (className ?? '')}
    {...otherProps}
  >
    <span>{index}</span>
    {children}
  </h2>
)
