import { useState } from 'react'

import { AppNavigationItem } from './AppNavigationItem'

import classes from './AppHeader.module.scss'

export const AppNavigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuButtonClick = () => setMenuOpen((previous) => !previous)

  return (
    <>
      <button
        className={classes.mobileNavToggle}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        onClick={handleMenuButtonClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul id="primary-navigation" className={classes.appNavigation} data-visible={isMenuOpen}>
          <AppNavigationItem to="" index="00" label="Home" />
          <AppNavigationItem to="destination" index="01" label="Destination" />
          <AppNavigationItem to="crew" index="02" label="Crew" />
          <AppNavigationItem to="technology" index="03" label="Tecnology" />
        </ul>
      </nav>
    </>
  )
}
