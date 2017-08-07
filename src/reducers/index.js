/**
 * Created by vitold on 09.04.17.
 */
import {combineReducers} from 'redux'
import page from './page'
import user from './users'

export default combineReducers({
		page,
		user
})
