import * as React from 'react'
import { Route, Switch } from 'react-router'

import {
  ABOUT_PATH,
  COOKIE_POLICY_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  RECIPES_PATH,
  SIGN_IN_PATH,
  TERMS_OF_USE_PATH
} from '../../state/constants'
import About from '../../pages/About'
import CookiePolicy from '../../pages/CookiePolicy'
import Home from '../../pages/Home'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import Recipes from '../../pages/Recipes'
import SignIn from '../../pages/SignIn'
import TermsOfUse from '../../pages/TermsOfUse'

export default function SwitchBoard () {
  return (
    <Switch>
      <Route exact path={ABOUT_PATH} component={About} />
      <Route exact path={COOKIE_POLICY_PATH} component={CookiePolicy} />
      <Route exact path={HOME_PATH} component={Home} />
      <Route exact path={PRIVACY_POLICY_PATH} component={PrivacyPolicy} />
      <Route exact path={RECIPES_PATH} component={Recipes} />
      <Route exact path={SIGN_IN_PATH} component={SignIn} />
      <Route exact path={TERMS_OF_USE_PATH} component={TermsOfUse} />
    </Switch>
  )
}
