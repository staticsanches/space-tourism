import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

import classes from './LargeLink.module.scss'

export type LargeLinkProps = LinkProps

export const LargeLink = ({ className, ...otherProps }: LargeLinkProps) => (
  <div>
    <Link
      className={classes.largeLink + ' ' + (className ?? '')}
      {...otherProps}
    />
  </div>
)
