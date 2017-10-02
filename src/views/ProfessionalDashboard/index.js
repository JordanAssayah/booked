import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styles from './styles.css'
// import PropTypes from 'prop-types'

class ProfessionalDashboard extends Component {
  render () {
    return (
      <div id='professional-dashboard' className={styles.PDashboard}>
        <Helmet>
          <title>
            Dashboard
          </title>
          <meta name='dashboard' content='A React.js Boilerplate application homepage' />
        </Helmet>
        <div className={`mrg ${styles.PDashboard}`}>
          <h1>Dashboard</h1>
          <div className={`box box--default box--rounded ${styles.PDashboard}`}>
            <div className='grid '>
              <div className='grid__item w-1/2'>
                <div className='box box--tiny'>
                  <h3>Create an event</h3>
                  <form>
                    <div className='form-group grid'>
                      <label htmlFor='email' className='field-label grid__item w-1/5'>
                        Email
                      </label>
                      <div className='grid__item w-4/5'>
                        <input type='email' name='email' className='field' />
                      </div>
                    </div>
                    <div className='form-group grid'>
                      <label htmlFor='email' className='field-label grid__item w-1/5'>
                        Email
                      </label>
                      <div className='grid__item w-4/5'>
                        <input type='email' name='email' className='field' />
                      </div>
                    </div>
                    <div className='form-group grid'>
                      <label htmlFor='email' className='field-label grid__item w-1/5'>
                        Email
                      </label>
                      <div className='grid__item w-4/5'>
                        <input type='email' name='email' className='field' />
                      </div>
                    </div>
                    <div className='form-group grid'>
                      <label htmlFor='email' className='field-label grid__item w-1/5'>
                        Email
                      </label>
                      <div className='grid__item w-4/5'>
                        <input type='email' name='email' className='field' />
                      </div>
                    </div>
                    <div className='form-group grid'>
                      <label htmlFor='password' className='field-label grid__item w-1/5'>
                        Password
                      </label>
                      <div className='grid__item w-4/5'>
                        <input type='password' name='password' className='field' />
                        <p className='field-help'>
                          A least 8 characters.
                        </p>
                      </div>
                    </div>
                    <div className='form-group grid grid--right'>
                      <div className='grid__item w-4/5'>
                        <label className='label label--inline'>
                          <input type='checkbox' className='checkbox' /> Remember me
                        </label>
                      </div>
                    </div>
                    <div className='form-group grid grid--right'>
                      <div className='grid__item w-4/5'>
                        <button type='submit' className='btn btn--primary'>
                          Log in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfessionalDashboard.propTypes = {

}

export default ProfessionalDashboard
