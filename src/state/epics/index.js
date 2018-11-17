import { combineEpics } from 'redux-observable'

import addRecipe from './addRecipe'

export default combineEpics(addRecipe)
