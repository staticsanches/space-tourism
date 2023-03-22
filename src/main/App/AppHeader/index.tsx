import logo from '@/assets/shared/logo.svg'
import { AppNavigation } from './AppNavigation'

export const AppHeader = () => (
  <header className="flex">
    <div>
      <img src={logo} alt="space tourism logo" />
    </div>

    <AppNavigation />
  </header>
)
