export type Heading3Props = React.HTMLAttributes<HTMLHeadingElement>

export const Heading3 = ({
  className,
  children,
  ...otherProps
}: Heading3Props) => (
  <h3
    className={'fs-700 ff-serif uppercase ' + (className ?? '')}
    {...otherProps}
  >
    {children}
  </h3>
)
