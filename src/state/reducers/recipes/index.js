import { RECIPE_ADDED, TITLE_UPDATED } from '../../constants'
import setRecipeTitle from '../../domain/setRecipeTitle'

const initialState = [
  {
    id: '123',
    title: 'Banana Cake',
    ingredients: [
      {
        id: 'abc',
        name: 'Banana'
      },
      {
        id: 'abd',
        name: 'Flour'
      }
    ],
    steps: [
      {
        id: 'abe',
        step: 'Peel banana'
      },
      {
        id: 'abf',
        step: 'Mix ingredients'
      }
    ]
  },
  {
    id: '124',
    title: 'Toasted Sandwich',
    ingredients: [
      {
        id: 'abg',
        name: 'Bread'
      },
      {
        id: 'abh',
        name: 'Cheese'
      }
    ],
    steps: [
      {
        id: 'abi',
        step: 'Slice cheese'
      },
      {
        id: 'abj',
        step: 'Toast bread'
      }
    ]
  }
]

export default function recipes (state = initialState, { type, payload }) {
  switch (type) {
    case RECIPE_ADDED:
      return [
        {
          ...payload.recipe
        },
        ...state
      ]
    case TITLE_UPDATED:
      return setRecipeTitle(state, payload)
    default:
      return state
  }
}
