import * as React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../../pages/Home'
import { HOME_PATH } from '../../state/constants'

export default function SwitchBoard () {
  return (
    <Switch>
      <Route exact path={HOME_PATH} component={Home} />
    </Switch>
  )
}
