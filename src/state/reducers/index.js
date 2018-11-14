import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import rootReducer from './root'

export default history =>
  combineReducers({
    router: connectRouter(history),
    root: rootReducer
  })
