import React from 'react'
import { Route } from 'react-router'
import Home from './views/Home'
import ProfessionalDashboard from './views/ProfessionalDashboard'

export const Routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home
  },
  {
    path: '/professional',
    name: 'professional',
    component: ProfessionalDashboard
  }
]

export const composedRouteComponents = Routes.map((routeProps, index) => <Route key={index} {...routeProps} />)
