import { NavLink } from 'react-router-dom'

import { destinations } from '@/data'
import classes from './DestinationNavigation.module.scss'

export type DestinationNavigationItemProps = {
  index: number
}

export const DestinationNavigationItem = ({ index }: DestinationNavigationItemProps) => (
  <li>
    <NavLink
      to={index ? index.toFixed(0) : ''}
      end
      className={({ isActive }) =>
        isActive ? classes.destinationNavigationItemActive : classes.destinationNavigationItem
      }
    >
      {destinations[index].name}
    </NavLink>
  </li>
)
