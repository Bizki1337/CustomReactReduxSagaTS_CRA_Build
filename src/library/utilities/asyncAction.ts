import {createAsyncAction} from 'typesafe-actions'

type Keys = 'REQUEST' | 'SUCCESS' | 'FAILURE'

const asyncTypes = <T extends {[key in Keys]: T[key]}>(types: T) => [
    types.REQUEST,
    types.SUCCESS,
    types.FAILURE
] as const

export default <T extends {[key in Keys]: string}>(types: T) => createAsyncAction(...asyncTypes(types))