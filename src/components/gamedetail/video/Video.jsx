import './video.css';
import Trailer from '../../details/components_details/Trailer/Trailer';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Video = ({ game, currentImg, setGameEdited, gameEdited }) => {
	const [url, setUrl] = useState(game.video);
	const [video, setVideo] = useState(game.video);
	const [urlError, setUrlError] = useState(false);
	const [inputClass, setInputClass] = useState('inputVideo');

	useEffect(() => {
		setUrl(url);
		setTimeout(() => {
			if (!urlError) {
				setVideo(url);
			}
		}, 3000);
		setGameEdited({
			...gameEdited,
			video: url,
		});
	}, [url]);

	const handleChange = async (event) => {
		setUrl(event.target.value);
		if (!event.target.value.includes('embed')) {
			setInputClass('inputClassError');
			setUrlError(true);
			return;
		}

		let esUrlValida = true;
		try {
			new URL(event.target.value);
		} catch (error) {
			esUrlValida = false;
		}

		if (!esUrlValida) {
			setUrlError(true);
			setInputClass('inputClassError');
			return;
		}

		setUrlError(false);
		setInputClass('inputVideo');
	};
	const handleSelectUrl = () => {
		Swal.fire({
			text: 'the trailer has been changed correctly!',
			background: '#333333',
			color: '#FF9500',
		});

		setVideo(gameEdited.video);
		setGameEdited({
			...gameEdited,
			video: url,
		});
	};

	return (
		<div className="videoContainer">
			<h2>Insert URL Trailer</h2>
			<input
				type="text"
				value={url}
				onChange={handleChange}
				className={inputClass}
			/>
			<div className="divButtonVideo" onClick={() => handleSelectUrl()}>
				<button disabled={urlError}>INSERT</button>
			</div>
			<div className="trailerInVideo">
				{' '}
				<Trailer video={video} />
			</div>
		</div>
	);
};

export default Video;
