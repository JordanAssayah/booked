/* global describe it expect */
import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import App from './'

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(
      <App />
    )
    expect(renderedComponent.find(Route).length).not.toBe(0)
  })
})
