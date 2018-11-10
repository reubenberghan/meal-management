import * as React from 'react'

import {
  ABOUT_PATH,
  HOME_PATH,
  RECIPES_PATH,
  SIGN_IN_PATH
} from '../../../state/constants'
import makeLocalLink from '../../../wrappers/makeLocalLink'

import HeaderLink from './HeaderLink'
import HeaderNav from './HeaderNav'
import HeaderWrapper from './HeaderWrapper'
import Logo from './Logo'

const Link = makeLocalLink(HeaderLink)

export default function Header () {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderNav>
        <Link href={HOME_PATH}>Home</Link>
        <Link href={ABOUT_PATH}>About</Link>
        <Link href={RECIPES_PATH}>Recipes</Link>
        <Link href={SIGN_IN_PATH}>Sign In</Link>
      </HeaderNav>
    </HeaderWrapper>
  )
}
