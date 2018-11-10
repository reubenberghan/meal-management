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
