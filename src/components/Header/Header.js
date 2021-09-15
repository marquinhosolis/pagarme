import { React, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import Logo from '../../assets/images/logo.png';

import './Header.scss';

export default function Header(props) {
	// declarando variaveis para serem usadas com useState
	const [qtdeProdutosCarrinho, setQtdeProdutosCarrinho] = useState(
		qtdeInicialCarrinho()
	);

	// funcao para exibir a quantidade de itens no carrinho no badge do header
	function qtdeInicialCarrinho() {
		// se já tiver itens no carrinho (armazenados em local storage)
		if (
			JSON.parse(localStorage.getItem('@testePagarMe/carrinho')) != null
		) {
			// retorna o numero de itens do objeto
			return JSON.parse(localStorage.getItem('@testePagarMe/carrinho'))
				.length;
			// se nao tiver itens no carrinho
		} else {
			//retorna 0
			return 0;
		}
	}

	//useEffect para acompanhar mudanca no estado dos produtos no carrinho
	useEffect(() => {
		// se o carrinho tiver itens
		if (props.itemsCarrinho) {
			// calcula o numero de itens no objeto
			const qtdeProdutos = JSON.parse(props.itemsCarrinho).length;
			// e atualiza a variavel
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
