import React from 'react'
import { Link } from 'gatsby'
import navStyles from './nav.module.css'

const Nav = () => {
  return (
    <nav>
      <p>
        <Link activeClassName={navStyles.activeNavItem} to='/work'>work</Link>
      </p>
      <p>
        <Link activeClassName={navStyles.activeNavItem} to='/contact'>contact</Link>
      </p>
      <p>
        <Link activeClassName={navStyles.activeNavItem} to='/'>home</Link>
      </p>
    </nav>
  )
}

export default Nav
