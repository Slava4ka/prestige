import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import tariffsReducer from '../pages/Tariffs/reducers';

const createRootReducer = (history: any) => combineReducers({
	card: tariffsReducer,
	router: connectRouter(history as any),
});

export default createRootReducer;
