import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import gridStyles from './layout.module.css'

const Layout = props => {
  return (
    <div className={gridStyles.wrapper}>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
