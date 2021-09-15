import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/logo.png';

import './Header.scss';

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="mainHeaderLogo">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
				</div>
				<div className="mainHeaderCarrinho">
					<Link to="/carrinho">
						<FontAwesomeIcon icon={faShoppingCart} />
						<span>10</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
