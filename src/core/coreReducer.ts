import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'

import testReducer from 'library/common/reducers/testReducer'

const createCoreReducer = (history: History) => combineReducers({
	router: connectRouter(history),
	test: testReducer,
})

export default createCoreReducer
