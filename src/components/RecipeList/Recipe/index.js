import * as React from 'react'
import { map } from 'ramda'

export default function Recipe ({ ingredients, steps, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Ingredients</h3>
      <ul>{map(({ id, name }) => <li key={id}>{name}</li>, ingredients)}</ul>
      <h3>Steps</h3>
      <ol>{map(({ id, step }) => <li key={id}>{step}</li>, steps)}</ol>
    </div>
  )
}
