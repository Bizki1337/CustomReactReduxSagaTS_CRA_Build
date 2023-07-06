import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as selectors from 'library/common/selectors/testSelector'
import * as actions from 'library/common/actions/testActions'

import Home from './Home'

const mapStateToProps = (store: RootState) => ({
	isLoading: selectors.getTestIsLoading(store),
	title: selectors.getTestDataTitle(store),
})

const mapDispatchToProps = {
	pushTestAction: actions.test2.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Home)

