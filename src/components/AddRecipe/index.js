import * as React from 'react'
import { connect } from 'react-redux'

import {
  ingredientChanged,
  recipeSubmitted,
  titleChanged,
  stepChanged
} from '../../state/actions'
import { getIngredient, getStep, getTitle } from '../../state/selectors'

function AddRecipe ({
  handleIngredientChange,
  handleSubmit,
  handleStepChange,
  handleTitleChange,
  ingredient,
  step,
  title
}) {
  return (
    <div>
      <h2>Add a recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>
          Title:
          <input
            type='text'
            name='title'
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <label htmlFor='ingredient'>
          Ingredient:
          <input
            type='text'
            name='ingredient'
            onChange={handleIngredientChange}
            value={ingredient}
          />
        </label>
        <label htmlFor='step'>
          Step:
          <input
            type='text'
            name='step'
            onChange={handleStepChange}
            value={step}
          />
        </label>
        <input type='submit' value='Add Recipe' />
      </form>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    ingredient: getIngredient(state),
    step: getStep(state),
    title: getTitle(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleIngredientChange: event =>
      dispatch(ingredientChanged(event.target.value)),
    handleStepChange: event => dispatch(stepChanged(event.target.value)),
    handleSubmit: event => {
      event.preventDefault()

      dispatch(recipeSubmitted())
    },
    handleTitleChange: event => dispatch(titleChanged(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
