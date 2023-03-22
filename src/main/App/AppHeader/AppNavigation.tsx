import { AppNavigationItem } from './AppNavigationItem'

import classes from './AppHeader.module.scss'

export const AppNavigation = () => (
  <nav>
    <ul className={'underline-indicators flex ' + classes.appNavigation}>
      <AppNavigationItem to="" index="00" label="Home" />
      <AppNavigationItem to="destination" index="01" label="Destination" />
      <AppNavigationItem to="crew" index="02" label="Crew" />
      <AppNavigationItem to="technology" index="03" label="Tecnology" />
    </ul>
  </nav>
)
