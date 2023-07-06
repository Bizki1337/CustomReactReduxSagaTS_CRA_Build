import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware, AnyAction} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import { StateType } from 'typesafe-actions'

import createCoreReducer from '../coreReducer'
import coreSaga from '../coreSaga'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

const middlewares = composeWithDevTools(
	applyMiddleware(
		routerMiddleware(history),
		sagaMiddleware,
	),
)

const coreReducer = createCoreReducer(history)

type coreReducer = ReturnType<typeof coreReducer>

const rootReducer = (
	state: coreReducer | undefined,
	action: AnyAction
) => {
	return coreReducer(state, action)
}

export type RootState = StateType<typeof coreReducer>

export default function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState, middlewares)
	sagaMiddleware.run(coreSaga)

	return store
}
