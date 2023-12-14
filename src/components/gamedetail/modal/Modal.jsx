'use  client';
import { useState } from 'react';
import './modal.css';
import Swal from 'sweetalert2';

const Modal = ({
	isOpen,
	setIsModalOpen,
	setGameEdited,
	gameEdited,
	handleImagePreview,
	selectedImagePreview,
	setSelectedImagePreview,
	setCurrentImg,
	currentImg,
	setGaleryClass,
}) => {
	const [inputIsOpen, setInputIsOpen] = useState(false);
	const [url, setUrl] = useState('');
	const [urlError, setUrlError] = useState(false);
	const [msjError, setMsjError] = useState('');

	if (!isOpen) return;

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setGameEdited({
			...gameEdited,
			image: file ? file.name.split(' ').join('') : '',
		});
		handleImagePreview(event);
	};
	const handleOpenInput = () => {
		setInputIsOpen(!inputIsOpen);
	};
	let classInput = 'inputUrl';
	const verifyUrl = (url) => {
		try {
			const parsedUrl = new URL(url);
			if (parsedUrl.host.length > 0) {
				return true;
			} else {
				throw new Error('La URL no contiene un host válido.');
			}
		} catch (error) {
			return false;
		}
	};
	const handleUrl = (event) => {
		const booleanVerifyUrl = verifyUrl(event.target.value);

		if (!booleanVerifyUrl && event.target.value.length > 4) {
			setMsjError('Error');
			setUrlError(true);
		}

		if (event.target.value.length < 4 || booleanVerifyUrl) {
			setMsjError('');
			setUrlError(false);
		}

		setUrl(event.target.value);
	};
	const handleSelectUrl = () => {
		setIsModalOpen(false);

		if (currentImg === 'Image') {
			Swal.fire({
				title: 'the image has been changed successfully!',
				imageUrl: url,
				imageWidth: 200,
				imageHeight: 270,
				imageAlt: 'Custom image',
				background: '#333333',
				color: '#FF9500',
			});

			setSelectedImagePreview(gameEdited.wallpaper);
			setCurrentImg('Wallpeaper');
		}

		if (currentImg === 'Wallpeaper') {
			Swal.fire({
				title: 'the wallpeaper has been changed successfully!',
				imageUrl: url,
				imageWidth: 200,
				imageHeight: 270,
				imageAlt: 'Custom image',
				background: '#333333',
				color: '#FF9500',
			});

			setGaleryClass('imgAndPen trailerClassContainerVideo');

			setSelectedImagePreview(gameEdited.video);
			setCurrentImg('Trailer');
		}

		if (currentImg === 'Image') {
			setGameEdited({
				...gameEdited,
				image: url,
			});
		}

		if (currentImg === 'Wallpeaper') {
			setGameEdited({
				...gameEdited,
				wallpeaper: url,
			});
		}

		setUrl('');
	};

	return (
		<div className="modalImg">
			<input
				type="file"
				className="selectFile"
				onChange={handleFileChange}
				accept="image/*"
			/>
			<div>
				<button className="insertURL" onClick={handleOpenInput}>
					INSERT URL
				</button>

				{inputIsOpen && (
					<div>
						<input
							type="text"
							value={url}
							className={classInput}
							onChange={handleUrl}
						/>
						<span className="emptyInputUrl" onClick={() => setUrl('')}>
							x
						</span>
					</div>
				)}

				{inputIsOpen && url.length > 0 && (
					<div className="msjAndButton">
						{msjError.length > 0 && <p>The URL is not valid</p>}
						<button
							className="applyUrl"
							onClick={handleSelectUrl}
							disabled={urlError || url.length < 5}
						>
							Apply
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
