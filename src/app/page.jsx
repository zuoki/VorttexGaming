'use client';
import { useEffect, useState } from 'react';
// import { data } from "../app/api/data";
import filter from './utils/filter.js';
import order from './utils/order.js';
import Card from '@/components/card/Card.jsx';
import MostPrice from '@/components/mostPrice/MostPrice.jsx';
import Select from '@/components/select/Select.jsx';
import Offerts from '@/components/offerts/Offerts.jsx';
import Aside from '@/components/aside/Aside.jsx';
import Genders from '@/components/generos/Genders.jsx';
import SearchBar from '@/components/searchbar/Searchbar.jsx';
import search from './utils/search';
import Paginado from '@/components/paginado/paginado';
import zustand from 'zustand';
import { useStoreCart } from '@/zustand/store';

const gamesPerPage = 8;

const HomePage = () => {
	const [data, setData] = useState([]);
	const [mostPriceGames, setMostPriceGames] = useState([]);
	const store = useStoreCart();

	useEffect(() => {
		fetch('/api/games')
			.then((response) => response.json())
			.then((games) => {
				setData(games);
				setMostPriceGames([games[0], games[2], games[9]]);
				console.log(store);
			});
	}, []);

	console.log('tengo datos', data);
	if (mostPriceGames.length > 0) {
		console.log('most price', mostPriceGames);
	}

	let dataToRender = data;

	const [filtrado, setFiltrado] = useState(false);
	const [filtrados, setFiltrados] = useState([]);
	const [ordenado, setOrdenado] = useState(false);
	const [ordenados, setOrdenados] = useState([]);
	const [find, setFind] = useState(false);
	const [finds, setFinds] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const intervalId = setInterval(() => {
			let randomGameIndexes = [];
			while (randomGameIndexes.length < 3) {
				const randomIndex = Math.floor(Math.random() * 10);
				if (!randomGameIndexes.includes(randomIndex)) {
					randomGameIndexes.push(randomIndex);
				}
			}

			const randomGames = randomGameIndexes.map((index) => data[index]);

			setMostPriceGames(randomGames);
		}, 10000);

		return () => clearInterval(intervalId);
	}, [data]);

	const mostPrice = data
		.map((game) => (game.precio >= 49.99 ? game : null))
		.filter((game) => game !== null);

	const arrTypesdata = data.map((game) => game.genre).flat();
	const uniqueArrTypesGames = arrTypesdata.filter((type, index, array) => {
		return array.indexOf(type) === index;
	});

	const handleFilter = (types) => {
		setFiltrados(filter(types));
		setOrdenado(false);
		setFind(false);
		setFiltrado(true);
		setCurrentPage(1);
	};

	const handleOrder = (op) => {
		setOrdenados(order(op, dataToRender));
		setFiltrado(false);
		setFind(false);
		setOrdenado(true);
		setCurrentPage(1);
	};

	const handleSearch = (letters) => {
		if (letters.length < 3) {
			setFinds(data);
			if (filtrados.length > 0) {
				setFinds(filtrados);
				return;
			}
			if (ordenados.length > 0) {
				setFinds(ordenados);
				return;
			}
			return;
		}
		setFinds(search(letters));
		setFiltrado(false);
		setOrdenado(false);
		setFind(true);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	if (filtrado) dataToRender = filtrados;
	if (ordenado) dataToRender = ordenados;
	if (find) dataToRender = finds;

	const indexOfLastGame = currentPage * gamesPerPage;
	const indexOfFirstGame = indexOfLastGame - gamesPerPage;
	const currentGames = dataToRender.slice(indexOfFirstGame, indexOfLastGame);

	const totalPages = Math.ceil(dataToRender.length / gamesPerPage);

	return (
		<div>
			{mostPrice ? (
				<div>
					<MostPrice />
					<Offerts games={mostPriceGames} />
				</div>
			) : (
				<p>LOADING</p>
			)}

			<Genders types={uniqueArrTypesGames} />
			<SearchBar handleSearch={handleSearch} />
			<div className="cardsAndAside">
				<Card data={currentGames} />

				<Aside
					types={uniqueArrTypesGames}
					onChange={[handleFilter, handleOrder]}
				/>
			</div>

			<Paginado
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default HomePage;
