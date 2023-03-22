import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { AppHeader } from './AppHeader'

export const App = () => (
  <div>
    <AppHeader />

    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  </div>
)
