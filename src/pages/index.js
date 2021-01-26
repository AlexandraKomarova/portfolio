import React from 'react'
import Layout from '../layouts/Layout'
import indexStyles from './index.module.css'
import Head from '../components/Head'

const index = () => {
  return (
    <Layout>
    <Head title='Home' /> 
      <div className={indexStyles.mainWrapper}>
        <div className={indexStyles.tech}>
          <p className={indexStyles.fullStack}>Full Stack Development</p>
          <p className={indexStyles.react}>React</p>
          <p className={indexStyles.graphql}>GraphQL</p>
          <p className={indexStyles.node}>Node</p>
          <p className={indexStyles.mongo}>MongoDB</p>
        </div>
        <div className={indexStyles.photo}>
          <img src={'/me.jpg'} alt="" width="35%"/>
        </div>
      </div>
    </Layout>
  )
}

export default index

/*
<div>
        <p className={indexStyles.fullStack}>Full Stack Development</p>
        <p className={indexStyles.react}>React</p>
        <p className={indexStyles.graphql}>GraphQL</p>
        <p className={indexStyles.node}>Node</p>
        <p className={indexStyles.mongo}>MongoDB</p>
      </div>
*/
