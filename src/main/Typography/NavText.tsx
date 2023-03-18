export type NavTextProps = {
  children: React.ReactNode
}

export const NavText = ({ children }: NavTextProps) => (
  <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">{children}</p>
)
