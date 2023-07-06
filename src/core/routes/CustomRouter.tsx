import {useState, useLayoutEffect} from 'react';
import {Router, RouterProps} from 'react-router-dom';
import {History} from 'history';

type CustomRouter = Partial<RouterProps> & {
	history: History;
}

const CustomRouter = ({
	basename,
	children,
	history,
}: CustomRouter) => {

	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={basename}
			children={children}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		/>
	);
};

  export default CustomRouter;