import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

import Header from '../../components/Header/Header';
import CarregandoProdutos from '../../components/CarregandoProdutos/CarregandoProdutos';
import Button from '../../components/Button/Button';

import ExcluirCarrinho from '../../components/ExcluirCarrinho/ExcluirCarrinho';
import { IoClose, IoArrowForward, IoCartOutline } from 'react-icons/io5';

import BannerImage from '../../assets/images/Home_banner-cover-image.png';
import AdicionarCarrinho from '../../components/AdicionarCarrinho/AdicionarCarrinho';
export default function Home() {
	// declarando variaveis para serem usadas com useState
	const [loading, setLoading] = useState(true);
	const [exibeCarrinhoSuspenso, setExibeCarrinhoSuspenso] = useState(false);
	const [produtos, setProdutos] = useState([]);
	const [produtosCarrinho, setProdutosCarrinho] = useState(
		localStorage.getItem('@testePagarMe/carrinho') || ''
	);
	const [produtosCarrinhoSuspenso, setProdutosCarrinhoSuspenso] = useState(
		[]
	);

	// conecta a API fakeStore
	useEffect(() => {
		fetch('https://api.itbook.store/1.0/search/new/')
			.then((res) => res.json())
			.then((json) => {
				// se conseguir conectar atribui os dados a variavel produtos
				setProdutos(json.books);
				// e desabilita o placeholder
				setLoading(false);
			})
			.catch((error) => {
				// se algo der errado, exibe um alerta e imprime os detelhes no console
				alert(
					'Houve um erro de conexão com a API de produtos. Favor verificar se a API esta disponível em https://fakestoreapi.com/docs'
				);
				console.error(error);
			});
	}, []);

	//useEffect para acompanhar mudanca no estado dos produtos no carrinho
	useEffect(() => {
		//se tiver itens no carrinho e a exibicao do carrinho estiver liberada
		if (produtosCarrinho != null && exibeCarrinhoSuspenso) {
			// adiciona a classe css ao carrinho suspenso
			document
				.getElementById('carrinhoSuspenso')
				.classList.add('carrinhoSuspenso--visible');

			// converte em objeto e inverte a ordem para os itens mais recentes ficarem no topo da lista
			let produtos = JSON.parse(produtosCarrinho).reverse();
			// atribui o objeto à variavel (nova variavel devido a necessidade de ter um objeto para ser mapeado no render)
			setProdutosCarrinhoSuspenso(produtos);
		}
	}, [produtosCarrinho, exibeCarrinhoSuspenso]);

	// funcao para ocultar o carrinho suspenso
	function fecharCarrinhoSuspenso() {
		// exclui a classe css do carrinho suspenso
		document
			.getElementById('carrinhoSuspenso')
			.classList.remove('carrinhoSuspenso--visible');
		setExibeCarrinhoSuspenso(false);
	}

	return (
		<>
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
						{produtosCarrinhoSuspenso.map((produto) => (
							<li key={produto.isbn13}>
								<ExcluirCarrinho
									produtosCarrinho={produtosCarrinho}
									setProdutosCarrinho={(produtosCarrinho) =>
										setProdutosCarrinho(produtosCarrinho)
									}
									idProduto={produto.isbn13}
								/>
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
			<Header itemsCarrinho={produtosCarrinho} />
			<main className="homeMain">
				<div className="bannerCover">
					<div className="container">
						<h1>
							<span>15%OFF</span>em produtos selecionados
						</h1>
						<img
							src={BannerImage}
							alt="Mulher com sacolas na mão"
						/>
					</div>
				</div>
				<div className="vitrineProdutos">
					<div className="container">
						<CarregandoProdutos loading={loading} />
						{produtos.map((item) => (
							<div className="produto" key={item.isbn13}>
								<div className="imagemProduto">
									<img src={item.image} alt={item.title} />
								</div>
								<div className="textoProduto">
									<h3 className="tituloProduto">
										{item.title}
									</h3>
									<p className="precoAntigo">R$ 899,00</p>
									<p className="precoProduto">{`R$ ${parseFloat(
										item.price.substring(1)
									).toFixed(2)}`}</p>
									<AdicionarCarrinho
										item={item}
										setExibeCarrinhoSuspenso={(
											exibeCarrinhoSuspenso
										) =>
											setExibeCarrinhoSuspenso(
												exibeCarrinhoSuspenso
											)
										}
										produtosCarrinho={produtosCarrinho}
										setProdutosCarrinho={(
											produtosCarrinho
										) =>
											setProdutosCarrinho(
												produtosCarrinho
											)
										}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
