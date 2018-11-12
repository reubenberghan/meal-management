# Base app

### Constants

```
src/constants.js
```

App-wide constants e.g. `export const SITE_NAME = 'My Cool App'`

### Setup tests

Create React App allows for a global setup file to be run before the tests. Useful if there are global variables or libraries that need to be initialized and used within the context of your tests.

```
src/setupTests.js
```

For example:

```
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

global.toJson = toJson
```

### Styles

Setup the global styles for the app using `styled-normalize` to "normailse" the CSS and `styled-components`'s `createGlobalStyle`. Used to reset the base browser CSS and define our own base CSS rules such as the font.

## Base components

### Layout

Generally speaking each page in the app will have three sections: Header, Main and Footer.

The header and footer are used to provide a quick high level picture of where a user is in the app, manage navigation and display important metadata that might be relevant to the user about the application as well as important page content agnostic app features that a user might need as part of using the for example signing in / out and profile / account links.

The main section of the app is where the current page content and component views are rendered.

The Layout component provides us a place to manage these top level components in a way that can be maintained searately from and resued across the pages.

Though the Footer, Header and Main components are located within the Layout component in the source code they are exported separately which allows for flexibilty in how they pulled into each page.

Footer
- Copyright
- FooterLink
- FooterNav
- FooterSeparator
- FooterWrapper

Header
- HeaderLink
- HeaderNav
- HeaderSeparator
- HeaderWrapper
- Logo

Main

### Reactify

### SiteWrapper (App)

The `SiteWrapper` component initialises the app.

This is where we `import` and create instances of the top level dependencies that we need throughout the app. These include our state management, routing, middleware and anything else that needs to added to the root of the app component tree such as a GraphQl provider.

For example:

```
src/components/SiteWrapper/index.js
```

```
import * as React from 'react'
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { ApolloProvider } from 'react-apollo'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { createBrowserHistory } from 'history'

import { initialState } from '../../state/constants'
import rootEpic from '../../state/epics'
import rootReducer from '../../state/reducers/root'
import Switchboard from '../Switchboard'

const epicMiddleware = createEpicMiddleware()
const history = createBrowserHistory()
const appliedMiddleware = applyMiddleware(
  epicMiddleware,
  routerMiddleware(history)
)
const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = devTools
  ? compose(
    appliedMiddleware,
    devTools
  )
  : compose(appliedMiddleware)
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  middleware
)

epicMiddleware.run(rootEpic)

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default function SiteWrapper () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider client={client}>
          <Switchboard />
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  )
}
```

### Switchboard (routing)

The `Switchboard` component manages the app routing.

All of the app pages and paths get imported and mapped here.

For example:

```
src/components/Switchboard/index.sj
```

```
import * as React from 'react'
import { Route, Switch } from 'react-router'

import {
  ABOUT_PATH,
  HOME_PATH,
  RECIPES_PATH,
  SIGN_IN_PATH
} from '../../state/constants'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Recipes from '../../pages/Recipes'
import SignIn from '../../pages/SignIn'

export default function SwitchBoard () {
  return (
    <Switch>
      <Route exact path={ABOUT_PATH} component={About} />
      <Route exact path={HOME_PATH} component={Home} />
      <Route exact path={RECIPES_PATH} component={Recipes} />
      <Route exact path={SIGN_IN_PATH} component={SignIn} />
    </Switch>
  )
}
```

## gql

This directory contains any GraphQl queries that the app uses, for example `recipes.graphql`.

## state

Depending on the state management solution this directory contains the necessary code to manage the client app's state.

Using a Redux implementation we generally have top level directories for actions, reducers, and selectors as well as a top level file for any state constants.

This might look like:

```
state
  | - actions
  |     | - index.js
  | - epics
  |     | - directory and index.js for each epic
  | - reducers
  |     | - directory and index.js for each reducer
  | - selectors
  |     | - index.js
  | - constants.js
```

## Base pages

## utilities

## wrappers