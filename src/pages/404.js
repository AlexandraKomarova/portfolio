import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/Layout'
import Head from '../components/Head'

const notFound = () => {
  return (
    <Layout>
      <Head title='404' />
      <h3>Page not found</h3>
      <Link to='/'><p>to home page &rarr;</p></Link>
    </Layout>
  )
}

export default notFound
