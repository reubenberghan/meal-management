import * as React from 'react'

import Layout from '../../components/Layout'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Main from '../../components/Layout/Main'

export default function Home () {
  return (
    <Layout>
      <Header />
      <Main>
        <p>This is the home page.</p>
      </Main>
      <Footer />
    </Layout>
  )
}
