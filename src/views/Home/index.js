import React from 'react'
import { Link } from 'react-router-dom'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import { Helmet } from 'react-helmet'
import styles from './styles.css'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div id='home' className={`mrgt+ ${styles.HomeContainer}`}>
        <Helmet>
          <title>Home Page</title>
          <meta name='description' content='A React.js Boilerplate application homepage' />
        </Helmet>
        <div className='box box--default box--rounded'>
          <h1 className='mrg0'>Booked</h1>
          <blockquote className='mrg0 mrgb+'>
            A place where you can find events within your location
          </blockquote>
          <div className='mrgb-'>
            <Link to='/professional' className={`mrgr ${styles.HomeLoginButton}`}>
              I am a professional
            </Link>
            <Link to='/customers' className={`${styles.HomeLoginButton}`}>
              I am a customer
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
