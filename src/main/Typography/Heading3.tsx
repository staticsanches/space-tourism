import React from 'react'

export type Heading3Props = {
  children: React.ReactNode
}

export const Heading3 = ({ children }: Heading3Props) => (
  <h3 className="fs-700 ff-serif uppercase">{children}</h3>
)
