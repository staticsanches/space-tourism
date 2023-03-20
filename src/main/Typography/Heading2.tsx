export type Heading2Props = React.HTMLAttributes<HTMLHeadingElement> & {
  sub?: boolean
}

export const Heading2 = ({
  sub = false,
  className,
  children,
  ...otherProps
}: Heading2Props) => (
  <h2
    className={
      (sub ? 'fs-200 ff-sans-cond letter-spacing-3' : 'fs-800 ff-serif') +
      ' uppercase ' +
      (className ?? '')
    }
    {...otherProps}
  >
    {children}
  </h2>
)
