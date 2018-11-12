import * as React from 'react'

import {
  COOKIE_POLICY_PATH,
  PRIVACY_POLICY_PATH,
  TERMS_OF_USE_PATH
} from '../../../state/constants'
import makeLocalLink from '../../../wrappers/makeLocalLink'

import Copyright from './Copyright'
import FooterLink from './FooterLink'
import FooterNav from './FooterNav'
import FooterWrapper from './FooterWrapper'

const Link = makeLocalLink(FooterLink)

export default function Footer () {
  return (
    <FooterWrapper>
      <Copyright />
      <FooterNav>
        <Link href={COOKIE_POLICY_PATH}>Cookie Policy</Link>
        <Link href={PRIVACY_POLICY_PATH}>Privacy Policy</Link>
        <Link href={TERMS_OF_USE_PATH}>Terms of Use</Link>
      </FooterNav>
    </FooterWrapper>
  )
}
