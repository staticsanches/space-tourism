import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DestinationImage } from './DestinationImage'

import { DestinationNavigation } from './DestinationNavigation'

import classes from './DestinationPage.module.scss'

export const DestinationPage = () => {
  useEffect(() => {
    const reactRoot = document.getElementById('react-root')!
    reactRoot.classList.add(classes.destination)
    return () => reactRoot.classList.remove(classes.destination)
  }, [])

  return (
    <main className={classes.destinationContainer}>
      <div>
        <Routes>
          <Route index element={<DestinationImage />} />
          <Route path=":destinationID" element={<DestinationImage />} />
        </Routes>
      </div>
      <div>
        <DestinationNavigation />
      </div>
    </main>
  )
}
