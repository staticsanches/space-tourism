export type Heading5Props = React.HTMLAttributes<HTMLHeadingElement>

export const Heading5 = ({
  className,
  children,
  ...otherProps
}: Heading5Props) => (
  <h5
    className={
      'text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 ' +
      (className ?? '')
    }
    {...otherProps}
  >
    {children}
  </h5>
)
