import { useEffect } from 'react'

import { LargeLink } from '@/components/LargeLink'
import classes from './HomePage.module.scss'

export const HomePage = () => {
  useEffect(() => {
    const reactRoot = document.getElementById('react-root')!
    reactRoot.classList.add(classes.home)
    return () => reactRoot.classList.remove(classes.home)
  }, [])

  return (
    <main className={classes.homeContainer}>
      <div>
        <h1 className={classes.title}>
          So, you want to travel to <span className="fs-900 ff-serif text-white">Space</span>
        </h1>

        <p className="text-accent">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>

      <div>
        <LargeLink to="/destination">Explore</LargeLink>
      </div>
    </main>
  )
}
