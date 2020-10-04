import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore} from 'redux';
import {StateType} from 'typesafe-actions';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import Routes from './main/Routes';
import createRootReducer from './main/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createHistory();

const rootReducer = createRootReducer(history);
export type RootState = StateType<typeof rootReducer>;

export const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			// sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Routes />
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
