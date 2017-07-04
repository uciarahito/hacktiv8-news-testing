import React from 'react';

import { shallow } from 'enzyme'

import App from './App';

describe('<App> component ', () => {

  const appWrapper = shallow(<App />)

  it('renders correctly', () => {
    expect(appWrapper).toHaveLength(1)
  });

  it('render a <BrowserRouter> ', () => {
    const browserRouterSection = appWrapper.find('BrowserRouter')
    expect(browserRouterSection).toHaveLength(1)
  })

  it('render a <div> ', () => {
    const divSection = appWrapper.find('div')
    expect(divSection).toHaveLength(1)
  })

  it('render a <Route> ', () => {
    const routeSection = appWrapper.find('Route')
    expect(routeSection).toHaveLength(1)
  })
})