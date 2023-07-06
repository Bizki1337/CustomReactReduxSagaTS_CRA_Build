import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client'

import configureStore, {history} from 'core/store/configureStore'
import CoreRoutes from 'core/routes/CoreRoutes'
import CustomRouter from 'core/routes/CustomRouter'

export const store = configureStore()

async function render() {

	const container = document.getElementById('root') as HTMLElement

	const root = createRoot(container)

	root.render(
		<Provider store={store}>
			<CustomRouter history={history}>
				<CoreRoutes />
			</CustomRouter>
		</Provider>
	)
}

render()