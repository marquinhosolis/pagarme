import React from 'react';

import './ExcluirCarrinho.scss';

import { IoTrashOutline } from 'react-icons/io5';

export default function ExcluirCarrinho(props) {
	function excluirCarrinho() {
		// recebe a  lista dos produtos que estao no carrinho e converte em objeto
		var carrinho = JSON.parse(props.produtosCarrinho);

		// encontra o index baseado no id do produto clicado
		var index = carrinho.findIndex((p) => p.isbn13 === props.idProduto);

		// remove o item do carrinho
		if (index > -1) {
			carrinho.splice(index, 1);
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
		<div onClick={excluirCarrinho} className="excluirCarrinho">
			<IoTrashOutline />
		</div>
	);
}
