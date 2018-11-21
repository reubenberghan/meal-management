import * as React from 'react'
import { map } from 'ramda'

import Recipe from '../Recipe'

export default function Recipes ({ recipes = [] }) {
  return (
    <div>
      {map(
        ({ id, ...recipe }) => <Recipe key={id} id={id} {...recipe} />,
        recipes
      )}
    </div>
  )
}
