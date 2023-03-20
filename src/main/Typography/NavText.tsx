export type NavTextProps = React.HTMLAttributes<HTMLParagraphElement>

export const NavText = ({ className, ...otherProps }: NavTextProps) => (
  <p
    className={
      'fs-300 uppercase ff-sans-cond letter-spacing-2 ' + (className ?? '')
    }
    {...otherProps}
  />
)
