import React from 'react';

import './Home.scss';

import Header from '../../components/Header';
import BannerImage from '../../assets/images/Home_banner-cover-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	return (
		<>
			<Header />
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
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
					<div className="produto">
						<div className="imagemProduto">
							<img src="#" alt="" />
						</div>
						<div className="textoProduto">
							<h3 className="tituloProduto">nome do produto</h3>
							<p className="precoAntigo">R$ 899,00</p>
							<p className="precoProduto">R$ 799,99</p>
							<button>
								<FontAwesomeIcon icon={faCartPlus} />
								adicionar ao carrinho
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
