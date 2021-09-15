import { React, useEffect, useState } from 'react';

import './Home.scss';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BannerImage from '../../assets/images/Home_banner-cover-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	const [produtos, setProdutos] = useState([]);
	const [produtosCarrinho, setProdutosCarrinho] = useState(
		localStorage.getItem('@testePagarMe/produtosCarrinho')
	);

	useEffect(() => {
		fetch('https://api.itbook.store/1.0/search/front-end/')
			.then((res) => res.json())
			.then((json) => setProdutos(json.books));
	}, []);

	function adicionarCarrinho(dadosProduto) {
		let carrinho =
			JSON.parse(localStorage.getItem('@testePagarMe/carrinho')) || [];

		if (!carrinho.some((el) => el.id === dadosProduto.id)) {
			carrinho.push(dadosProduto);
		}

		localStorage.setItem(
			'@testePagarMe/carrinho',
			JSON.stringify(carrinho)
		);

		setProdutosCarrinho(localStorage.getItem('@testePagarMe/carrinho'));
	}

	return (
		<>
			<Header itemsCarrinho={produtosCarrinho} />
			<div className="bannerCover">
				<div className="container">
					<h1>
						<span>15%OFF</span>em produtos selecionados
					</h1>
					<img src={BannerImage} alt="Mulher com sacolas na mão" />
				</div>
			</div>
			<div className="vitrineProdutos">
				<div className="container">
					{produtos.map((item) => (
						<div className="produto" key={item.isbn13}>
							<div className="imagemProduto">
								<img src={item.image} alt={item.title} />
							</div>
							<div className="textoProduto">
								<h3 className="tituloProduto">{item.title}</h3>
								<p className="precoProduto">{`R$ ${parseFloat(
									item.price.substring(1)
								).toFixed(2)}`}</p>
								<div onClick={() => adicionarCarrinho(item)}>
									<Button>
										<FontAwesomeIcon icon={faCartPlus} />
										adicionar ao carrinho
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
