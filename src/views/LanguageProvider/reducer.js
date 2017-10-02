/**
 * @Author: Loisel Nathan <nathanloisel>
 * @Date:   23-09-2016
 * @Email:  nathan.loisel@apptitue.ch
 * @Project: robogen
 * @Last modified by:   nathanloisel
 * @Last modified time: 23-09-2016
*/

/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable'
import {
  CHANGE_LOCALE
} from './constants'

const initialState = fromJS({
  locale: 'en'
})

function languageProviderReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale)
    default:
      return state
  }
}

export default languageProviderReducer
