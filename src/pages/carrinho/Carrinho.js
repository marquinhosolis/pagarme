import { React, useEffect, useState } from 'react';

import './Carrinho.scss';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ExcluirCarrinho from '../../components/ExcluirCarrinho/ExcluirCarrinho';

export default function Carrinho() {
	const [produtosCarrinho, setProdutosCarrinho] = useState(
		localStorage.getItem('@testePagarMe/carrinho') || ''
	);
	const [listaProdutosCarrinho, setListaProdutosCarrinho] = useState([]);

	//useEffect para acompanhar mudanca no estado dos produtos no carrinho
	useEffect(() => {
		//se tiver itens no carrinho e a exibicao do carrinho estiver liberada
		if (produtosCarrinho != null) {
			// converte em objeto e inverte a ordem para os itens mais recentes ficarem no topo da lista
			let produtos = JSON.parse(produtosCarrinho).reverse();
			// atribui o objeto à variavel (nova variavel devido a necessidade de ter um objeto para ser mapeado no render)
			setListaProdutosCarrinho(produtos);
		}
	}, [produtosCarrinho]);

	return (
		<>
			<Header itemsCarrinho={produtosCarrinho} />
			<main className="carrinhoMain">
				<div className="container">
					<div className="carrinhoDetalhe">
						<h1>
							Carrinho <span>2 itens</span>
						</h1>
						<ul className="vitrineCarrinho">
							{listaProdutosCarrinho.map((produto) => (
								<li key={produto.id}>
									<ExcluirCarrinho
										produtosCarrinho={produtosCarrinho}
										setProdutosCarrinho={(
											produtosCarrinho
										) =>
											setProdutosCarrinho(
												produtosCarrinho
											)
										}
										idProduto={produto.id}
									/>
									<div className="vitrineCarrinhoImagem">
										<img src={produto.image} alt="" />
									</div>
									<div className="vitrineCarrinhoTexto">
										{produto.title} <br />{' '}
										<div className="qantidadeProduto">
											<button>-</button>
											{produto.qtde}
											<button>+</button>
										</div>
									</div>
									<div className="vitrineCarrinhoPreco">
										{`R$ ${produto.price.toFixed(2)}`}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="carrinhoResumo">
						<h2>Resumo do Pedido</h2>

						<table>
							<tbody>
								<tr>
									<td>Total</td>
									<td>R$ 319,00</td>
								</tr>
								<tr>
									<td>Frete</td>
									<td>R$ 14,90</td>
								</tr>
							</tbody>
						</table>
						<div className="totalPedido">
							<table>
								<tbody>
									<tr>
										<td>Total</td>
										<td>R$ 328,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p className="prazoEntrega">
							Previsão de Entrega: 5 dias | 20 de julho
						</p>
						<Button>prosseguir</Button>
					</div>
				</div>
			</main>
		</>
	);
}
