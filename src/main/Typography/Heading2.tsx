import React from 'react'

export type Heading2Props = {
  sub?: boolean
  children: React.ReactNode
}

export const Heading2 = ({ sub = false, children }: Heading2Props) => (
  <h2
    className={
      (sub ? 'fs-200 ff-sans-cond letter-spacing-3' : 'fs-800 ff-serif') +
      ' uppercase'
    }
  >
    {children}
  </h2>
)
