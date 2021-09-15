import { React } from 'react';

import './Quantidades.scss';

export default function Quantidades(props) {
	function aumentaQuantidade(idProduto, quantidade) {
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(props.produtosCarrinho);

		// encontra o index baseado no id do produto clicado
		var index = carrinho.findIndex((p) => p.id === idProduto);

		// incrementa um a quantidade do item
		carrinho[index].qtde = carrinho[index].qtde + 1;

		// armazena o carrinho  atualizado em local storage
		localStorage.setItem(
			'@testePagarMe/carrinho',
			JSON.stringify(carrinho)
		);

		// comunica ao elemento pai que houve uma mudanca nos itens do carrinho
		props.setProdutosCarrinho(JSON.stringify(carrinho));
	}

	function diminuiQuantidade(idProduto, quantidade) {
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(props.produtosCarrinho);

		// encontra o index baseado no id do produto clicado
		var index = carrinho.findIndex((p) => p.id === idProduto);

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
		props.setProdutosCarrinho(JSON.stringify(carrinho));
	}
	return (
		<div className="vitrineCarrinhoQuantidade">
			<button
				onClick={() =>
					diminuiQuantidade(props.produto.id, props.produto.qtde)
				}
			>
				-
			</button>
			{props.produto.qtde}
			<button
				onClick={() =>
					aumentaQuantidade(props.produto.id, props.produto.qtde)
				}
			>
				+
			</button>
		</div>
	);
}
