import * as React from 'react'
import { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { SITE_NAME } from '../../constants'

const LayoutWrapper = styled.div`
  display: grid;
  grid-template:
    'head head head' 5rem
    '. main .' 1fr
    'foot foot foot' 5rem
    / 1fr 4fr 1fr;
  min-height: 100vh;
`

LayoutWrapper.displayName = 'LayoutWrapper'

export default function Layout ({ children, title }) {
  const pageTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME

  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <LayoutWrapper>{children}</LayoutWrapper>
    </Fragment>
  )
}
