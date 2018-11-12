import * as React from 'react'

import Layout from '../../components/Layout'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'
import Main from '../../components/Layout/Main'
import RecipeList from '../../components/RecipeList'

import { initialState } from '../../state/constants'
import { getRecipes } from '../../state/selectors'

const recipes = getRecipes(initialState)

export default function Recipes () {
  return (
    <Layout>
      <Header />
      <Main>
        <RecipeList recipes={recipes} />
      </Main>
      <Footer />
    </Layout>
  )
}
