import classes from './DestinationNavigation.module.scss'

import { destinations } from '@/data'
import { DestinationNavigationItem } from './DestinationNavigationItem'

export const DestinationNavigation = () => (
  <nav>
    <ul className={classes.destinationNavigation}>
      {destinations.map((_, index) => (
        <DestinationNavigationItem key={index} index={index} />
      ))}
    </ul>
  </nav>
)
