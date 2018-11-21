import { findIndex, lensPath, propEq, set } from 'ramda'
import { isNotString } from 'ramda-adjunct'

export default function setRecipeTitle (state, { id, title }) {
  const recipeIdx = findIndex(propEq('id', id), state)

  if (recipeIdx === -1 || isNotString(title)) {
    return state
  }

  const recipeTitleLens = lensPath([recipeIdx, 'title'])

  return set(recipeTitleLens, title, state)
}
