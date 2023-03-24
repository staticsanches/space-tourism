import logo from '@/assets/shared/logo.svg'
import classes from './AppHeader.module.scss'
import { AppNavigation } from './AppNavigation'

export const AppHeader = () => (
  <header className={classes.appHeader}>
    <div>
      <img src={logo} alt="space tourism logo" className={classes.logo} />
    </div>

    <AppNavigation />
  </header>
)
