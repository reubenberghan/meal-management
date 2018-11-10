import * as React from 'react'
import styled from 'styled-components'

import { SITE_NAME } from '../../../../constants'

const LogoWrapper = styled.div`
  display: flex;
  padding: 0 1rem;

  > span {
    font-size: 1.4rem;
    align-self: center;
  }
`

LogoWrapper.displayName = 'LogoWrapper'

export default function Logo () {
  return (
    <LogoWrapper>
      <img src='/assets/logo-light-50x50.png' alt='site logo' />
      <span>{SITE_NAME}</span>
    </LogoWrapper>
  )
}
