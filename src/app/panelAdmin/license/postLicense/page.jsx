'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './postLicense.css';
import ParticlesWall from '@/components/wallpeaper.jsx/ParticlesWall';
import Link from 'next/link';

function LicenseComponent() {
	const [licenses, setLicenses] = useState([]);
	const [name, setName] = useState('');
	const [active, setActive] = useState(false);
	const [titleGame, setTitleGame] = useState('');
	const [games, setGames] = useState([]);

	useEffect(() => {
		const API_GAMES =
			process.env.NODE_ENV === 'development'
				? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
				: process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
		axios
			.get(API_GAMES)
			.then((response) => {
				setGames(response.data);
			})
			.catch((error) => {
				console.error(error + 'esta license ya esta creada');
			});
	}, []);

	const createLicense = () => {
		const API_URL =
			process.env.NODE_ENV === 'development'
				? process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_LOCAL
				: process.env.NEXT_PUBLIC_URL_REQUESTS_LICENSE_DEPLOY;
		axios
			.post(API_URL, { name, active, titleGame })
			.then((response) => {
				setLicenses([...licenses, response.data]);
				alert('Licencia creada con éxito');
			})
			.catch((error) => {
				alert(error + 'esta license ya esta creada');
			});
	};

	return (
		<>
			<ParticlesWall />
			<div className="contenedorLicense">
				<h1 style={{ paddingTop: '40px' }}>Create Key</h1>
				<form action="" className="formContainer">
					<div className="totoroto2">
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="4gT0CKEWFk-7N2B..."
              className='inputPostL'
						/>
						<select
							value={titleGame}
							onChange={(e) => setTitleGame(e.target.value)}
						>
							{games.map((game) => (
								<option key={game.id} value={game.title}>
									{game.title}
								</option>
							))}
						</select>
						<button onClick={createLicense}>Add Key</button>
					</div>
				</form>
				<Link href={'/panelAdmin/license'}>
					<button className="backButton2">⬅ BACK</button>
				</Link>
			</div>
		</>
	);
}

export default LicenseComponent;
