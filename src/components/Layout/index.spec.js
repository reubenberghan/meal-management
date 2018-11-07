import * as React from 'react'
import { shallow } from 'enzyme'

import { SITE_NAME } from '../../constants'

import Layout from '.'

describe('components:Layout', () => {
  it(`should render the Layout with ${SITE_NAME} when no title prop`, () => {
    expect(toJson(shallow(<Layout />))).toMatchSnapshot()
  })

  it(`should render the Layout ${SITE_NAME} prefixed by title prop when given`, () => {
    expect(toJson(shallow(<Layout title='About' />))).toMatchSnapshot()
  })
})
