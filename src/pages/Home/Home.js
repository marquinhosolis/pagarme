import React from 'react';

import './Home.scss';

import Header from '../../components/Header';
import BannerImage from '../../assets/images/Home_banner-cover-image.png';

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
			Home
		</>
	);
}
