import React from 'react'

export type Heading1Props = {
  sub?: boolean
  children: React.ReactNode
}

export const Heading1 = ({ sub = false, children }: Heading1Props) => (
  <h1 className={(sub ? 'fs-500' : 'fs-900') + ' ff-serif uppercase'}>
    {children}
  </h1>
)
