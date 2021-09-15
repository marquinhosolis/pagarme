import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './CarrinhoSuspenso.scss';
import { IoClose, IoArrowForward, IoCartOutline } from 'react-icons/io5';
import Button from '../Button/Button';

export default function CarrinhoSuspenso(props) {
	const [produtosCarrinho, setProdutosCarrinho] = useState([]);
	useEffect(() => {
		if (props.produtos != null && props.exibir) {
			document
				.getElementById('carrinhoSuspenso')
				.classList.add('carrinhoSuspenso--visible');

			let produtos = JSON.parse(props.produtos).reverse();
			setProdutosCarrinho(produtos);
		}
	}, [props.produtos, props.exibir]);

	function fecharCarrinhoSuspenso() {
		document
			.getElementById('carrinhoSuspenso')
			.classList.remove('carrinhoSuspenso--visible');
		props.setExibeCarrinhoSuspenso(false);
	}

	return (
		<div id="carrinhoSuspenso" className="carrinhoSuspenso">
			<div
				className="closeCarrinhoSuspenso"
				onClick={fecharCarrinhoSuspenso}
			>
				<IoClose />
			</div>
			<div className="carrinhoSuspensoTitulo">
				<IoCartOutline /> Itens no Carrinho
			</div>
			<div className="listaProdutosCarrinho">
				<ul>
					{produtosCarrinho.reverse().map((produto) => (
						<li key={produto.isbn13}>
							<div className="listaProdutosCarrinhoImagem">
								<img src={produto.image} alt="" />
							</div>
							<div className="listaProdutosCarrinhoTexto">
								{produto.title} <br />{' '}
								{`R$ ${parseFloat(
									produto.price.substring(1)
								).toFixed(2)}`}
							</div>
						</li>
					))}
				</ul>
			</div>
			<Link to="/carrinho">
				<Button cor="btn-branco">
					Finalizar compra <IoArrowForward />
				</Button>
			</Link>
			<div
				className="continuarComprandoLink"
				onClick={fecharCarrinhoSuspenso}
			>
				continuar comprando
			</div>
		</div>
	);
}
