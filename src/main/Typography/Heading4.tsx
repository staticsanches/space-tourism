export type Heading4Props = React.HTMLAttributes<HTMLHeadingElement>

export const Heading4 = ({
  className,
  children,
  ...otherProps
}: Heading4Props) => (
  <h4
    className={'fs-600 ff-serif uppercase ' + (className ?? '')}
    {...otherProps}
  >
    {children}
  </h4>
)
