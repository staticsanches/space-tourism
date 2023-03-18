import React from 'react'

export type Heading4Props = {
  children: React.ReactNode
}

export const Heading4 = ({ children }: Heading4Props) => (
  <h4 className="fs-600 ff-serif uppercase">{children}</h4>
)
