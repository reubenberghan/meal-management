import * as React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

import { titleUpdated } from '../../../state/actions'

function Recipe ({ makeHandleOnChange, id, ingredients, steps, title }) {
  const handleOnChange = makeHandleOnChange(id)
  return (
    <div>
      <h2>
        <input type='text' onChange={handleOnChange} value={title} />
      </h2>
      <h3>Ingredients</h3>
      <ul>{map(({ id, name }) => <li key={id}>{name}</li>, ingredients)}</ul>
      <h3>Steps</h3>
      <ol>{map(({ id, step }) => <li key={id}>{step}</li>, steps)}</ol>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    makeHandleOnChange: id => event =>
      dispatch(titleUpdated({ id, title: event.target.value }))
  }
}

export default connect(null, mapDispatchToProps)(Recipe)
