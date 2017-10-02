import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { composedRouteComponents } from '../../routes'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Helmet titleTemplate='%s - React.js Boilerplate' defaultTitle='React.js Boilerplate'>
          <meta name='description' content='A React.js Boilerplate application' />
        </Helmet>
        <Switch>
          {composedRouteComponents}
        </Switch>
      </div>
    )
  }
}

export default App
