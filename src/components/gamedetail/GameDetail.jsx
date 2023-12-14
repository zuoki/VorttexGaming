'use client';
import React, { useEffect, useState } from 'react';
import './gamedetail.css';
import { FaPen } from 'react-icons/fa';
import Modal from './modal/Modal';
import { validations } from './util';
import Video from './video/Video';
import Swal from 'sweetalert2';
import axios from 'axios';
import Loader from '../loader/Loader';

const GameDetail = ({ game }) => {
	const [gameEdited, setGameEdited] = useState();
	const [selectedImagePreview, setSelectedImagePreview] = useState(null);
	const [currentImg, setCurrentImg] = useState('Image');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inputErrors, setInputErrors] = useState({
		title: false,
		description: false,
		price: false,
	});
	const [galeryClass, setGaleryClass] = useState('imgAndPen');
	const [inputTitle, setInputTitle] = useState('titleInputClass');
	const [inputDescription, setInputDescription] = useState(
		'descriptionInputClass'
	);
	const [inputPrice, setInputPrice] = useState('priceInputClass');

	useEffect(() => {
		setGameEdited(game);
		console.log(gameEdited);
	}, [game]);
	if (!game) return <Loader />;

	const handleEdit = (event) => {
		if (event.target.name === 'price' && isNaN(event.target.value)) return;
		if (event.target.name === 'price') {
			if (parseInt(event.target.value) > 150) return;
		}
		const inputEvaluated = validations(event.target.name, event.target.value);

		if (inputEvaluated[1])
			setInputErrors({
				...inputErrors,
				[inputEvaluated[0]]: inputEvaluated[1],
			});
		if (inputEvaluated[1] && inputEvaluated[0] == 'title') {
			setInputTitle('titleInputClassError');
			setInputPrice('');
			setInputDescription('');
		} else if (inputEvaluated[1] && inputEvaluated[0] == 'description') {
			setInputDescription('descriptionInputClassError');
			setInputPrice('');
			setInputTitle('');
		} else if (inputEvaluated[1] && inputEvaluated[0] == 'price') {
			setInputPrice('priceInputClassError');
			setInputDescription('');
			setInputTitle('');
		}
		if (!inputEvaluated[1] && inputEvaluated[0] == 'title') {
			setInputErrors({
				title: false,
				description: false,
				price: false,
			});
			setInputTitle('');
		}
		if (!inputEvaluated[1] && inputEvaluated[0] == 'description') {
			setInputErrors({
				title: false,
				description: false,
				price: false,
			});
			setInputDescription('');
		}
		if (!inputEvaluated[1] && inputEvaluated[0] == 'price') {
			setInputErrors({
				title: false,
				description: false,
				price: false,
			});
			setInputPrice('');
		}
		setGameEdited({
			...gameEdited,
			[event.target.name]: event.target.value,
		});
	};
	const handleImagePreview = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (currentImg === 'Image') {
					Swal.fire({
						title: 'the image has been changed successfully!',
						imageUrl: reader.result,
						imageWidth: 200,
						imageHeight: 270,
						imageAlt: 'Custom image',
						background: '#333333',
						color: '#FF9500',
					});

					setCurrentImg('Wallpeaper');
					setSelectedImagePreview(game.wallpaper);
				}

				if (currentImg === 'Wallpeaper') {
					Swal.fire({
						title: 'the wallpeaper has been changed successfully!',
						imageUrl: reader.result,
						imageWidth: 200,
						imageHeight: 270,
						imageAlt: 'Custom image',
						background: '#333333',
						color: '#FF9500',
					});

					setCurrentImg('Trailer');
					setSelectedImagePreview(game.trailer);
					setGaleryClass('imgAndPen trailerClassContainerVideo');
				}
			};
			reader.readAsDataURL(file);
		}
		setIsModalOpen(false);
	};
	const verifyErrors = () => {
		const valuesInputErrors = Object.values(inputErrors);

		for (const value of valuesInputErrors) {
			if (value) {
				return true; // Si encuentra al menos un error, retorna true
			}
		}

		return false;
	};
	const cleanInputs = () => {
		setGameEdited(game);
	};
	const sendGameEdited = () => {
		gameEdited.price = parseFloat(gameEdited.price);

		Swal.fire({
			title: 'are you sure about editing the game?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, edit game!',
			background: '#333333',
			color: '#FF9500',
		}).then(async (result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Edited!',
					text: 'the game has been edited correctly.',
					icon: 'success',
					background: '#333333',
					color: '#FF9500',
				});
				const fetchData = async () => {
					try {
						const API_URL =
							process.env.NODE_ENV === 'development'
								? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
								: process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
						const { data } = await axios.put(API_URL, gameEdited);
					} catch (error) {
						console.log(error.message);
					}
				};
				fetchData();
				window.location.href = '/panelAdmin/games';
			}
		});
	};
	const goToList = () => {
		window.location.href = '/panelAdmin/games';
	};

	const deleteGame = () => {
		Swal.fire({
			title: 'Are you sure you want to delete the game?',
			text: "you won't be able to reverse it!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
			background: '#333333',
			color: '#FF9500',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Deleted!',
					text: 'This game has been deleted.',
					icon: 'success',
					background: '#333333',
					color: '#FF9500',
				});
			}
		});

		const fnAsync = async () => {
			const { value: formValues } = await Swal.fire({
				title: 'Confirm delete',
				background: '#333333',
				color: '#FF9500',
				html: `
        <p>you must write "DELETE + game name"</p>
          <input id="swal-input1" class="swal2-input">
        `,
				focusConfirm: false,
				preConfirm: () => {
					return [document.getElementById('swal-input1').value];
				},
			});
			if (formValues) {
				const val = Swal.fire(JSON.stringify(formValues));
				if (val.params.title !== `["DELETE ${game.title}"]`) {
					Swal.fire({
						text: 'Something went wrong in the confirmation',
						background: '#333333',
						color: '#FF9500',
					});
					return;
				}
				Swal.fire({
					title: 'The game has been deleted successfully!',
					icon: 'success',
					background: '#333333',
					color: '#FF9500',
				});
				const fetchData = async () => {
					try {
						const API_URL =
							process.env.NODE_ENV === 'development'
								? process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_LOCAL
								: process.env.NEXT_PUBLIC_URL_REQUESTS_GAMES_DEPLOY;
						const { data } = await axios.delete(API_URL, {
							data: { id: gameEdited.id },
						});
						console.log(data);
					} catch (error) {
						console.log(error.message);
					}
				};
				fetchData();
				window.location.href = '/panelAdmin/games';
			}
		};
		fnAsync();
	};

	return (
		<div className="gameDetailContainer">
			<div className="gridDetail">
				<div className={galeryClass}>
					{currentImg === 'Trailer' ? (
						<Video
							game={game}
							currentImg={currentImg}
							setGameEdited={setGameEdited}
							gameEdited={gameEdited}
						/>
					) : (
						<>
							{selectedImagePreview ? (
								<img
									src={selectedImagePreview}
									alt="Selected"
									className="imgToEdit"
									style={{ width: '100%', height: '100%' }}
								/>
							) : (
								<img
									src={gameEdited.image}
									alt="Original"
									className="imgToEdit"
									style={{ width: '100%', height: '100%' }}
								/>
							)}
							<span
								onClick={() => setIsModalOpen(!isModalOpen)}
								className="spanPen"
							>
								<FaPen />
							</span>
							<div className="penAndModal">
								<Modal
									isOpen={isModalOpen}
									setIsModalOpen={setIsModalOpen}
									setGameEdited={setGameEdited}
									gameEdited={gameEdited}
									handleImagePreview={handleImagePreview}
									selectedImagePreview={selectedImagePreview}
									setSelectedImagePreview={setSelectedImagePreview}
									setCurrentImg={setCurrentImg}
									currentImg={currentImg}
									setGaleryClass={setGaleryClass}
								/>
							</div>
						</>
					)}
				</div>

				<div className="propsToEdit">
					<input
						className={inputTitle}
						type="text"
						onChange={handleEdit}
						value={gameEdited.title}
						name="title"
						placeholder={gameEdited.title}
					/>
					<input
						className={inputDescription}
						type="text"
						onChange={handleEdit}
						value={gameEdited.description}
						name="description"
						placeholder={gameEdited.description}
					/>
					<input
						className={inputPrice}
						type="text"
						onChange={handleEdit}
						value={gameEdited.price}
						name="price"
						placeholder={`${gameEdited.price} $`}
					/>
					<input
						/* className={inputOffert} */ type="text"
						onChange={handleEdit}
						value={gameEdited.offert}
						name="offert"
						placeholder={!gameEdited.offert && 'this game has no offers'}
						disabled={!gameEdited.offert}
					/>

					<button
						className="cleanButton"
						disabled={
							verifyErrors() ||
							JSON.stringify(gameEdited) === JSON.stringify(game)
						}
						onClick={cleanInputs}
					>
						CLEAN
					</button>
					<button className="deleteButton" onClick={deleteGame}>
						DELETE GAME
					</button>
				</div>
			</div>

			<div className="confirmAndCancel">
				<button
					className="confirm"
					disabled={
						verifyErrors() ||
						JSON.stringify(gameEdited) === JSON.stringify(game)
					}
					onClick={sendGameEdited}
				>
					Confirm
				</button>
				<button
					className="cancel"
					disabled={
						verifyErrors() ||
						JSON.stringify(gameEdited) === JSON.stringify(game)
					}
					onClick={goToList}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default GameDetail;
