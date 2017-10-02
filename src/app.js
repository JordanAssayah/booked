// Needed for redux-saga es6 generator support
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { translationMessages } from './i18n'
import FontFaceObserver from 'fontfaceobserver'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import 'sanitize.css/sanitize.css'

import './assets/kanbasu/main.scss'

import App from './views/App'
import LanguageProvider from './views/LanguageProvider'

const openSansObserver = new FontFaceObserver('Open Sans', {})

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded')
}, () => {
  document.body.classList.remove('fontLoaded')
})

// Create redux store with history
const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept(['./i18n', './views/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'))
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js')
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}
