import * as React from 'react'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'

import { createBrowserHistory } from 'history'

import { initialState } from '../../state/constants'
import createRootReducer from '../../state/reducers'
import SwitchBoard from '../SwitchBoard'

const history = createBrowserHistory()
const appliedMiddleware = applyMiddleware(routerMiddleware(history))
const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = devTools
  ? compose(appliedMiddleware, devTools)
  : compose(appliedMiddleware)
const store = createStore(createRootReducer(history), initialState, middleware)

export default function SiteWrapper () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <SwitchBoard />
      </ConnectedRouter>
    </Provider>
  )
}
