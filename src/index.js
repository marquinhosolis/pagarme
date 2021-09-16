import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './globals.scss';

import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/carrinho">
						<Carrinho />
					</Route>
				</Switch>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
