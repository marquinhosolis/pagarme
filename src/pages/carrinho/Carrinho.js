import { React, useState } from 'react';

import './Carrinho.scss';

import Header from '../../components/Header/Header';

export default function Carrinho() {
	return (
		<div>
			<Header itemsCarrinho={produtosCarrinho} />
			carrinho
		</div>
	);
}
