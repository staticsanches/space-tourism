import { NavLink } from 'react-router-dom'

import classes from './AppHeader.module.scss'

export type AppNavigationItemProps = {
  to: string
  index: string
  label: string
}

export const AppNavigationItem = ({
  to,
  index,
  label,
}: AppNavigationItemProps) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        classes.appNavigationItem + (isActive ? ' active' : '')
      }
    >
      <span>{index}</span>
      {label}
    </NavLink>
  </li>
)
