import { Route, Routes } from 'react-router-dom'

import { DestinationPage } from '@/pages/DestinationPage'
import { HomePage } from '@/pages/HomePage'
import { AppHeader } from './AppHeader'

export const App = () => (
  <>
    <AppHeader />

    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/destination/*" element={<DestinationPage />} />
    </Routes>
  </>
)
