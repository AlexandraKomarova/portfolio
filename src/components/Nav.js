import React from 'react'
import { Link } from 'gatsby'
import navStyles from './nav.module.css'

const Nav = () => {
  return (
    <nav>
      <p>
        <Link activeClassName={navStyles.activeNavItem} to='/'>alexandra komarova</Link>
      </p>
      <p>
        <Link activeClassName={navStyles.activeNavItem} to='/work'>work & resume</Link>
      </p>
    </nav>
  )
}

export default Nav
