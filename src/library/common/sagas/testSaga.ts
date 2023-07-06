import {call, put, takeLatest} from 'redux-saga/effects'

import * as api from '../apis/testApi'
import * as types from '../types/testTypes'
import * as actions from '../actions/testActions'

function* requestTestDataSaga() {
	try {
		// const {data: {data}} = yield call(api.loadTestDataRequest)
		// yield put(actions.test2.success(data))
		yield put(actions.test2.success({id: 1, title: 'some title'}))
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* test() {
	yield takeLatest(types.test.REQUEST, requestTestDataSaga)
}