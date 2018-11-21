import * as React from 'react'

import Layout from '../../components/Layout'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Main from '../../components/Layout/Main'
import RecipeList from '../../components/RecipeList'

export default function Recipes () {
  return (
    <Layout>
      <Header />
      <Main>
        <RecipeList />
      </Main>
      <Footer />
    </Layout>
  )
}
