import {
  INGREDIENT_CHANGED,
  RECIPE_ADDED,
  STEP_CHANGED,
  TITLE_CHANGED
} from '../constants'

export function recipeAdded (recipe) {
  return {
    type: RECIPE_ADDED,
    payload: {
      recipe
    }
  }
}

export function ingredientChanged (ingredient) {
  return {
    type: INGREDIENT_CHANGED,
    payload: {
      ingredient
    }
  }
}

export function titleChanged (title) {
  return {
    type: TITLE_CHANGED,
    payload: {
      title
    }
  }
}

export function stepChanged (step) {
  return {
    type: STEP_CHANGED,
    payload: {
      step
    }
  }
}
