import * as React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

import { titleUpdated, ingredientUpdated, stepUpdated } from '../../../state/actions'

function Recipe ({ makeTitleOnChange, makeIngredientOnChange, makeStepOnChange, id, ingredients, steps, title }) {
  const handleTitleOnChange = makeTitleOnChange(id)
  return (
    <div>
      <h2>
        <input type='text' onChange={handleTitleOnChange} value={title} />
      </h2>
      <h3>Ingredients</h3>
      <ul>{map(({ id, name }) => <li key={id}><input type='text' onChange={makeIngredientOnChange(id)} value={name} /></li>, ingredients)}</ul>
      <h3>Steps</h3>
      <ol>{map(({ id, step }) => <li key={id}><input type='text' onChange={makeStepOnChange(id)} value={step} /></li>, steps)}</ol>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    makeTitleOnChange: id => event =>
      dispatch(titleUpdated({ id, title: event.target.value })),
    makeIngredientOnChange: id => event =>
      dispatch(ingredientUpdated({ id, ingredient: event.target.value })),
    makeStepOnChange: id => event =>
      dispatch(stepUpdated({ id, step: event.target.value }))
  }
}

export default connect(null, mapDispatchToProps)(Recipe)
