import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import recipes from './recipes'
import addRecipe from './addRecipe'

export default history =>
  combineReducers({
    router: connectRouter(history),
    recipes,
    addRecipe
  })
