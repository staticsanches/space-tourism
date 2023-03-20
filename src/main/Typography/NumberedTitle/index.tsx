import classes from './NumberedTitle.module.scss'

export type NumberedTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  number: React.ReactNode
}

export const NumberedTitle = ({
  number,
  children,
  className,
  ...otherProps
}: NumberedTitleProps) => (
  <h2
    className={classes.numberedTitle + ' ' + (className ?? '')}
    {...otherProps}
  >
    <span>{number}</span>
    {children}
  </h2>
)
