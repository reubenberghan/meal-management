import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  ingredientChanged,
  recipeSubmitted,
  titleChanged,
  stepChanged
} from '../../state/actions'
import { getIngredient, getStep, getTitle } from '../../state/selectors'

const AddRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > form {
    display: flex;
    flex-direction: column;

    > label {
      margin-bottom: 1.2rem;
    }
  }
`

AddRecipeWrapper.displayName = 'AddRecipeWrapper'

function AddRecipe ({
  handleIngredientChange,
  handleSubmit,
  handleStepChange,
  handleTitleChange,
  ingredient,
  step,
  title
}) {
  const titleInput = React.createRef()
  const ingredientInput = React.createRef()
  const stepInput = React.createRef()

  return (
    <AddRecipeWrapper>
      <h2>Add a recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>
          Title:
          <input
            type='text'
            name='title'
            onChange={handleTitleChange}
            value={title}
            ref={titleInput}
          />
        </label>
        <label htmlFor='ingredient'>
          Ingredient:
          <input
            type='text'
            name='ingredient'
            onChange={handleIngredientChange}
            value={ingredient}
            ref={ingredientInput}
          />
        </label>
        <label htmlFor='step'>
          Step:
          <input
            type='text'
            name='step'
            onChange={handleStepChange}
            value={step}
            ref={stepInput}
          />
        </label>
        <input type='submit' value='Add Recipe' />
      </form>
    </AddRecipeWrapper>
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
