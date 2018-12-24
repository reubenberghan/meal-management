import { findIndex, flatten, map, propEq } from 'ramda'
import { isNotString } from 'ramda-adjunct'

import { getRecipes } from '../../selectors'

export default function setRecipeIngredient (state, { id, name } = {}) {
  const recipes = getRecipes(state)
  const ingredients = flatten(map(({ ingredients }) => ingredients, recipes))
  const ingredientIdx = findIndex(propEq('id', id), ingredients)

  if (ingredientIdx === -1 || isNotString(name)) {
    return state
  }

  return ingredients[ingredientIdx]
}
