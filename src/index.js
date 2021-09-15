import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './globals.scss';

import Home from './pages/Home/Home';
import Checkout from './pages/checkout/Checkout';
import Carrinho from './pages/carrinho/Carrinho';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div>
				{/* <ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/carrinho">Carrinho</Link>
					</li>
					<li>
						<Link to="/checkout">Checkout</Link>
					</li>
				</ul> */}

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/carrinho">
						<Carrinho />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
