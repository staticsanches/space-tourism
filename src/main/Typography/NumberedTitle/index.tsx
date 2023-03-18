import classes from './NumberedTitle.module.scss'

export type NumberedTitleProps = {
  index: React.ReactNode
  children: React.ReactNode
}

export const NumberedTitle = ({ index, children }: NumberedTitleProps) => (
  <h2 className={classes.numberedTitle}>
    <span>{index}</span>
    {children}
  </h2>
)
