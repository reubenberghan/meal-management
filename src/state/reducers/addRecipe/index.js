import {
  INGREDIENT_CHANGED,
  STEP_CHANGED,
  TITLE_CHANGED
} from '../../constants'

const initialState = {
  title: '',
  ingredient: '',
  step: ''
}

export default function addRecipe (state = initialState, { type, payload }) {
  switch (type) {
    case INGREDIENT_CHANGED:
      return {
        ...state,
        ingredient: payload.ingredient
      }
    case STEP_CHANGED:
      return {
        ...state,
        step: payload.step
      }
    case TITLE_CHANGED:
      return {
        ...state,
        title: payload.title
      }
    default:
      return state
  }
}
