import React, { useState} from 'react';
import {useDispatch} from 'react-redux'
import styles from './styles.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getSignedRequest } from '../../../services/upload';
import {createPhoto} from '../../../store/photoGallery'

const settings = {
	autoplay: false,
	showThumbs: false,

};
const Slide = ({ photo, setPhotos, photos }) => {
	const [description, setDescription] = useState('');

	const updateDescription = (e) => {
		setDescription(e.target.value);
	};

	const cancelHandler = () => {
		setDescription(photo.description);
	};

	const deleteHandler = (e) => {
		if (photos.length === 1) return setPhotos([]);
		let updatedArr = photos.filter((item) => item.id !== photo.id);

		setPhotos(updatedArr);
	};

	const updateHandler = () => {
		setPhotos(photos.map((item) => (item.id === photo.id ? { ...item, description: description } : item)));
	};

	return (
		<>
			<div className={styles.carousel}>
				<div className={styles.carouselImgContainer}>
					<img className={styles.carouselImg} src={photo.src} alt="" />
				</div>
				<div>
					<div className={styles.group}>
						<label className={styles.label} htmlFor="description">
							Short Description
						</label>
						<div className={styles.textAreaContainer}>
							<textarea
								required
								className={styles.textInput}
								name="description"
								type="description"
								value={description}
								onChange={updateDescription}
							/>
						</div>
					</div>
					<div className={`${styles.imageOptions} ${styles.options}`} onClick={updateHandler}>
						Update
					</div>
					<div onClick={cancelHandler} className={`${styles.imageOptions} ${styles.options}`}>
						Cancel{' '}
					</div>
					<div
						value={photo.id}
						onClick={deleteHandler}
						className={`${styles.imageOptions} ${styles.options}`}
					>
						Delete
					</div>
				</div>
			</div>
		</>
	);
};

const PhotoFormSlider = ({ photos, setPhotos }) => {
	return (
		<>
			<Carousel styling={{ height: '50%' }} {...settings}>
				{photos.map((photo) => (
					<Slide key={photo.id} photos={photos} photo={photo} setPhotos={setPhotos} />
				))}
			</Carousel>
		</>
	);
};

const PhotoForm = ({ setFormStep, eventId, setEventId }) => {
	const dispatch = useDispatch();
	const [photos, setPhotos] = useState([]);
	const [url, setUrl] = useState('');
	const [file, setFile] = useState(null);


	let [photoKey, setPhotoKey] = useState(0);
	const onSubmit = async (e) => {
		e.preventDefault();
		photos.map((photo) => {
			if (photo.file) {
				(async function (){
					let url = await getSignedRequest(photo.file)
					
					await dispatch(createPhoto(eventId, photo.description, url))
					setFormStep(3)
				}())
			}

		});
	};
	const readUrl = (e) => {
		if (e.target.files[0]) {
			const src = URL.createObjectURL(e.target.files[0]);
			setUrl(src);
			setFile(e.target.files[0])
		}
	};
	const urlHandler = (e) => {
		if (!e.target.value) {
			setUrl(e.target.value);
		}
		setUrl(e.target.value);
	};
	const addPhotoHandler = () => {
		// let src;
		// url ? (src = url) : (src = file);
		// ! Split into the url and file
		let newPhoto = {
			id: photoKey,
			src: url,
			description: '',
			file
		};

		setPhotos((prevState) => [...prevState, newPhoto]);
		setUrl('');
		setFile('');
		let increaser = (photoKey += 1);
		setPhotoKey(increaser);
		document.getElementById('file-input').value = null;
	};

	return (
		<form className={styles.formContainer} onSubmit={onSubmit}>
			{' '}
			{photos[0] && <PhotoFormSlider id="xxxxx" photos={photos} setPhotos={setPhotos} />}
			{/* {url ||
				(url && ( */}
			{url && (
				<div className={styles.addPhoto} onClick={addPhotoHandler}>
					Add Photo
				</div>
			)}
			{/* ))} */}
			<div className={styles.photoOptions}>
				<div className={styles.group}>
					<label className={styles.label}>
						{photos[0] ? 'Choose a Photo' : 'Add More Photos'}
						<input
							id="file-input"
							type="file"
							className={`${styles.input} ${styles.fileInput}`}
							onChange={readUrl}
						/>
					</label>
				</div>
				<div className={styles.group}>
					<label className={styles.label}>
						From Url
						<input
							value={url}
							onChange={urlHandler}
							type="url"
							className={`${styles.input} ${styles.urlInput}`}
							// onChange={readUrl}
						/>
					</label>
				</div>
			</div>
			{photos[0] && (
				<div className={`${styles.input} ${styles.confirm}`} onClick={onSubmit}>
					Confirm
				</div>
			)}
		</form>
	);
};

export default PhotoForm;
