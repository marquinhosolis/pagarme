import React from 'react';
import Button from '../../components/Button/Button';

export default function AdicionarCarrinho(props) {
	function adicionarCarrinho() {
		// declara a variavel carrinho como um array vazio para uso posterior
		let carrinho = [];
		// se o carrinho já tiver itens
		if (props.produtosCarrinho.length > 0) {
			// recebe esses dados via props e converte em objeto
			carrinho = JSON.parse(props.produtosCarrinho);
		}

		// se o produto clicado nao estiver no carrinho
		if (!carrinho.some((el) => el.isbn13 === props.item.isbn13)) {
			// adiciona o valor de 1 à quantidade deste item no carrinho
			props.item.qtde = 1;
			//inclui a nova chave no array de itens
			carrinho.push(props.item);
			// armazena array atualizado em local storage
			localStorage.setItem(
				'@testePagarMe/carrinho',
				JSON.stringify(carrinho)
			);
			// comunica ao elemento pai que houve uma mudanca nos itens do carrinho
			props.setProdutosCarrinho(JSON.stringify(carrinho));

			// se o produto já estiver no carrinho
		} else {
			//exibe um alerta
			alert('Este produto já está no carrinho');
		}
		// exibe o carrinho suspenso para que o usuario possa conferir o carrinho
		props.setExibeCarrinhoSuspenso(true);
	}

	return (
		<div onClick={() => adicionarCarrinho()}>
			<Button>Adicionar ao carrinho</Button>
		</div>
	);
}
