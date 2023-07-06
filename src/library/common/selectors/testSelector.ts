import {createSelector} from 'reselect'
import {RootState} from 'core/store/configureStore'

export const getTestIsLoading = (state: RootState) => state.test.isLoading
export const getTestData = (state: RootState) => state.test.testData

export const getTestDataTitle = createSelector(
	[getTestData],
	(data) => data?.title
)