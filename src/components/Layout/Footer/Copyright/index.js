import * as React from 'react'

import styled from 'styled-components'

import { SITE_NAME } from '../../../../constants'

const CopyrightWrapper = styled.div`
  flex-shrink: 1;
  flex-grow: 0;
  font-size: 1rem;
  padding: 0 1rem;
  align-self: center;
  justify-self: center;
`
CopyrightWrapper.displayName = 'CopyrightWrapper'

export default function Copyright () {
  return (
    <CopyrightWrapper>{`${String.fromCharCode(
      169
    )} 2018 by ${SITE_NAME}`}</CopyrightWrapper>
  )
}
