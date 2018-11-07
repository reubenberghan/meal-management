import * as React from 'react'
import { Fragment } from 'react'
import Helmet from 'react-helmet'

import { SITE_NAME } from '../../constants'

export default function Layout ({ children, title }) {
  const pageTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME

  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </Fragment>
  )
}
