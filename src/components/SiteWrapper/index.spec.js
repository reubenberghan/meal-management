import * as React from 'react'
import { shallow } from 'enzyme'

import SiteWrapper from '.'

describe('components:App', () => {
  it('should render the App component and CSS properties properly', () => {
    expect(toJson(shallow(<SiteWrapper />))).toMatchSnapshot()
  })
})
