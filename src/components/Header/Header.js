import { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import Logo from '../../assets/images/logo.png';

import './Header.scss';

export default function Header(props) {
	const [qtdeProdutosCarrinho, setQtdeProdutosCarrinho] = useState(
		qtdeInicialCarrinho()
	);

	function qtdeInicialCarrinho() {
		if (
			JSON.parse(localStorage.getItem('@testePagarMe/carrinho')) != null
		) {
			return JSON.parse(localStorage.getItem('@testePagarMe/carrinho'))
				.length;
		} else {
			return 0;
		}
	}

	useEffect(() => {
		if (props.itemsCarrinho) {
			const qtdeProdutos = JSON.parse(props.itemsCarrinho).length;
			setQtdeProdutosCarrinho(qtdeProdutos);
		}
	}, [props.itemsCarrinho]);

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
						<IoCartOutline />
						<span>
							<div className="content">
								{qtdeProdutosCarrinho}
							</div>
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
