import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/testActions'

export type TestState = Readonly<{
	isLoading: boolean
	isError: boolean
	testData: {
		id: number | null
		title: string
	} | null
}>

const initialState: TestState = {
	isLoading: false,
	isError: false,
	testData: null
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): TestState => {

	switch (action.type) {

		case getType(actions.test2.request):
			return {
				...state,
				isLoading: true,
			}

		case getType(actions.test2.success):
			return {
				...state,
				testData: action.payload,
				isLoading: false,
				isError: false,
			}

		case getType(actions.test2.failure):
			return {
				...state,
				isLoading: false,
				isError: true,
			}

		default:
			return state
	}
}

export default authReducer