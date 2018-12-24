import {
  INGREDIENT_CHANGED,
  INGREDIENT_UPDATED,
  RECIPE_ADDED,
  RECIPE_SUBMITTED,
  STEP_CHANGED,
  STEP_UPDATED,
  TITLE_CHANGED,
  TITLE_UPDATED
} from '../constants'

export function recipeAdded (recipe) {
  return {
    type: RECIPE_ADDED,
    payload: {
      recipe
    }
  }
}

export function recipeSubmitted () {
  return {
    type: RECIPE_SUBMITTED
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

export function stepChanged (step) {
  return {
    type: STEP_CHANGED,
    payload: {
      step
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

export function titleUpdated (payload) {
  return {
    type: TITLE_UPDATED,
    payload
  }
}

export function ingredientUpdated (payload) {
  return {
    type: INGREDIENT_UPDATED,
    payload
  }
}

export function stepUpdated (payload) {
  return {
    type: STEP_UPDATED,
    payload
  }
}
