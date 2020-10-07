import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main/Main';
import WithHeader from '../components/Header/withHeader';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Redirect to="/index" />
		</Route>
		<Route path="/index" exact>
			{WithHeader(Main)}
		</Route>
		<Redirect to="/index" />
		{/* <Route path="/tariffs" exact>
			{WithHeader(Tariffs)}
		</Route> */}
	</Switch>
);

export default Routes;
