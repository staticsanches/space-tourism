import classes from './LargeButton.module.scss'

export type LargeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const LargeButton = ({ className, ...otherProps }: LargeButtonProps) => (
  <div>
    <button
      className={classes.largeButton + ' ' + (className ?? '')}
      {...otherProps}
    />
  </div>
)
