import {all, fork} from 'redux-saga/effects'

import testSaga from 'library/common/sagas/testSaga'

export default function* coreSaga() {
	yield all([
		fork(testSaga),
	])
}
