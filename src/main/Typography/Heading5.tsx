import React from 'react'

export type Heading5Props = {
  children: React.ReactNode
}

export const Heading5 = ({ children }: Heading5Props) => (
  <h5 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
    {children}
  </h5>
)
