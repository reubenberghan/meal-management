import { ofType } from 'redux-observable'
import { map, withLatestFrom } from 'rxjs/operators'
import uuidv1 from 'uuid/v1'

import { recipeAdded } from '../../actions'
import { RECIPE_SUBMITTED } from '../../constants'
import { getIngredient, getStep, getTitle } from '../../selectors'

export default function addRecipe (action$, state$) {
  return action$.pipe(
    ofType(RECIPE_SUBMITTED),
    withLatestFrom(state$),
    map(([, state]) => {
      const recipe = {
        id: uuidv1(),
        ingredients: [
          {
            id: uuidv1(),
            name: getIngredient(state)
          }
        ],
        steps: [
          {
            id: uuidv1(),
            step: getStep(state)
          }
        ],
        title: getTitle(state)
      }

      return recipeAdded(recipe)
    })
  )
}
