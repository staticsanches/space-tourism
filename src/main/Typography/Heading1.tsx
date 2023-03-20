export type Heading1Props = React.HTMLAttributes<HTMLHeadingElement> & {
  sub?: boolean
}

export const Heading1 = ({
  sub = false,
  className,
  children,
  ...otherProps
}: Heading1Props) => (
  <h1
    className={
      (sub ? 'fs-500' : 'fs-900') + ' ff-serif uppercase ' + (className ?? '')
    }
    {...otherProps}
  >
    {children}
  </h1>
)
