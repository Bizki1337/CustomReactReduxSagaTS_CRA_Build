import {createAction, createAsyncAction} from 'typesafe-actions'

import * as types from '../types/testTypes'

import * as interfaces from '../interfaces/test'

export const test = createAction(types.test2.request)<interfaces.ITest>()

export const test2 = createAsyncAction(
	types.test.REQUEST,
	types.test.SUCCESS,
	types.test.FAILURE,
)<number, interfaces.ITest, string>()