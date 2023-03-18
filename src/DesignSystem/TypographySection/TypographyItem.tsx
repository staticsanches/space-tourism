import React from 'react'

export type TypographyItemProps = {
  type: string
  children: React.ReactNode
}

export const TypographyItem = ({ type, children }: TypographyItemProps) => (
  <div>
    <p className="text-accent">{type}</p>
    {children}
  </div>
)
