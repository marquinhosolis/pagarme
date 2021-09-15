import { React, useEffect, useState } from 'react';

import './Carrinho.scss';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ExcluirCarrinho from '../../components/ExcluirCarrinho/ExcluirCarrinho';

import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Carrinho() {
	const [produtosCarrinho, setProdutosCarrinho] = useState(
		localStorage.getItem('@testePagarMe/carrinho') || ''
	);
	const [listaProdutosCarrinho, setListaProdutosCarrinho] = useState([]);
	const [total, setTotal] = useState(0);

	//useEffect para acompanhar mudanca no estado dos produtos no carrinho
	useEffect(() => {
		//se tiver itens no carrinho
		if (produtosCarrinho != null) {
			// converte em objeto
			let produtos = JSON.parse(produtosCarrinho);
			// atribui o objeto à variavel (nova variavel devido a necessidade de ter um objeto para ser mapeado no render)
			setListaProdutosCarrinho(produtos);
		}

		// toda vez que houver uma mudança, recalcula o total
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(produtosCarrinho);

		// cria uma variavel soma
		let somaTotais = 0;
		// percorre o array

		for (var index in carrinho) {
			// recebe o preco unitario
			let precoProduto = parseFloat(carrinho[index].price.substring(1));
			//recebe o valor unitario
			let qtdeProduto = carrinho[index].qtde;
			// atribui à soma total o valor da multiplicaco do preco * quantidade
			somaTotais = somaTotais + qtdeProduto * precoProduto;
		}

		// seta o valor total do carrinho com o resultado
		setTotal(somaTotais);
	}, [produtosCarrinho]);

	function aumentaQuantidade(idProduto, quantidade) {
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(produtosCarrinho);

		// encontra o index baseado no id do produto clicado
		var index = carrinho.findIndex((p) => p.isbn13 === idProduto);

		// incrementa um a quantidade do item
		carrinho[index].qtde = carrinho[index].qtde + 1;

		// armazena o carrinho  atualizado em local storage
		localStorage.setItem(
			'@testePagarMe/carrinho',
			JSON.stringify(carrinho)
		);

		// comunica ao elemento pai que houve uma mudanca nos itens do carrinho
		setProdutosCarrinho(JSON.stringify(carrinho));
	}

	function diminuiQuantidade(idProduto, quantidade) {
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(produtosCarrinho);

		// encontra o index baseado no id do produto clicado
		var index = carrinho.findIndex((p) => p.isbn13 === idProduto);

		// se tiver mais de um
		if (quantidade > 1) {
			// decrementa um a quantidade do item
			carrinho[index].qtde = carrinho[index].qtde - 1;
		}

		// armazena o carrinho  atualizado em local storage
		localStorage.setItem(
			'@testePagarMe/carrinho',
			JSON.stringify(carrinho)
		);

		// comunica ao elemento pai que houve uma mudanca nos itens do carrinho
		setProdutosCarrinho(JSON.stringify(carrinho));
	}

	return (
		<>
			<Header itemsCarrinho={produtosCarrinho} />
			<main className="carrinhoMain">
				<div className="container">
					<div className="carrinhoDetalhe">
						<h1>Carrinho {total !== 0 && <span>2 itens</span>}</h1>
						{total === 0 && (
							<p className="carrinhoVazioMensagem">
								Seu carrinho está vazio! <br />
								<br />
								<Link to="/">
									<IoArrowBack /> selecionar produtos
								</Link>
							</p>
						)}
						<ul className="vitrineCarrinho">
							{listaProdutosCarrinho.map((produto) => (
								<li key={produto.isbn13}>
									<ExcluirCarrinho
										produtosCarrinho={produtosCarrinho}
										setProdutosCarrinho={(
											produtosCarrinho
										) =>
											setProdutosCarrinho(
												produtosCarrinho
											)
										}
										idProduto={produto.isbn13}
									/>
									<div className="vitrineCarrinhoImagem">
										<img src={produto.image} alt="" />
									</div>
									<div className="vitrineCarrinhoTexto">
										<p>
											{produto.title}{' '}
											<span>
												R${' '}
												{parseFloat(
													produto.price.substring(1)
												).toFixed(2)}
											</span>
										</p>
										<div className="vitrineCarrinhoQuantidade">
											<button
												onClick={() =>
													diminuiQuantidade(
														produto.isbn13,
														produto.qtde
													)
												}
											>
												-
											</button>
											{produto.qtde}
											<button
												onClick={() =>
													aumentaQuantidade(
														produto.isbn13,
														produto.qtde
													)
												}
											>
												+
											</button>
										</div>
									</div>
									<div className="vitrineCarrinhoPreco">
										{`R$ ${(
											parseFloat(
												produto.price.substring(1)
											) * produto.qtde
										).toFixed(2)}`}
									</div>
								</li>
							))}
						</ul>
					</div>
					{total !== 0 && (
						<div className="carrinhoResumo">
							<h2>Resumo do Pedido</h2>
							<table>
								<tbody>
									<tr>
										<td>Total</td>
										<td>R$ {total.toFixed(2)}</td>
									</tr>
									<tr>
										<td>Frete</td>
										<td>R$ 14.90</td>
									</tr>
								</tbody>
							</table>
							<div className="totalPedido">
								<table>
									<tbody>
										<tr>
											<td>Total</td>
											<td>
												R$ {(total + 14.9).toFixed(2)}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p className="prazoEntrega">
								Previsão de Entrega: 5 dias | 20 de julho
							</p>
							<Button>prosseguir</Button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
