import * as React from 'react'

import Layout from '../../components/Layout'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Main from '../../components/Layout/Main'

export default function About () {
  return (
    <Layout>
      <Header />
      <Main>
        <p>This is the About page.</p>
      </Main>
      <Footer />
    </Layout>
  )
}
