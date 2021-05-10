import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { createAmbassadorEvent } from '../../../store/ambassadorEvents';
import SelectDropDownMenu from '../SelectDropDownMenu';

const geoHandler = async (city, country) => {
	let replacedCity = city.replaceAll(' ', '+');
	let replacedCountry = country.replaceAll(' ', '+');

	let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${replacedCity}%${replacedCountry}&key=${process.env.REACT_APP_GOOGLE_GEO_KEY}`;
	const response = await fetch(url);
	if (!response.ok) return alert('There is something with wrong with the reponse please try again later');

	let data = await response.json();
	if (!data.results.length) return 'error';
	return data.results;
};

const EventForm = ({ setFormStep, setEventId }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [cost, setCost] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');

	const [region, setRegion] = useState('');
	const [locationError, setLocationError] = useState(false);

	// function success(position) {
	// 	const latitude = position.coords.latitude;
	// 	const longitude = position.coords.longitude;
	// }


	// const findLocation = () => {
	// 	if (navigator.geolocation) {
	// 		let geo = navigator.geolocation.getCurrentPosition(success);
	// 	} else {
	// 		alert('Geolocation is not supported by this browser.');
	// 	}
	// };


	const onSubmit = async (e) => {
		e.preventDefault();
		
		const geo = await geoHandler(city, country);
		let eventObj = { title, description, cost };
		let longitude = geo[0].geometry.location.lng;
		let latitude = geo[0].geometry.location.lat;
		let locationObj = { country, region, longitude, latitude };

		let event = await dispatch(createAmbassadorEvent(eventObj, locationObj));
		setEventId(event.id);
		setFormStep(2);
	};

	return (
		<form className={styles.formContainer} onSubmit={onSubmit}>
			<div className={styles.errorContainer}>
				{errors.map((error) => (
					<div className={styles.error}>{error}</div>
				))}
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="title">
					Title
				</label>
				<input
					required
					className={styles.input}
					name="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="description">
					Description
				</label>
				<div className={styles.textAreaContainer}>
					<textarea
						required
						className={styles.textInput}
						name="description"
						type="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="cost">
					Cost
				</label>
				<input
					required
					className={styles.input}
					name="cost"
					type="number"
					min="1"
					step="any"
					value={cost}
					onChange={(e) => setCost(e.target.value)}
				/>
			</div>
			<div>
				<div className={styles.label}>Location </div>
				{locationError && <div>The location could not found Please try again </div>}
				
				{/* <div onClick={findLocation}>Find My Location </div> */}
				
				<div className={styles.locationGroup}>
					<input
						className={styles.input}
						placeholder="City"
						name="city"
						type="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<input
						className={styles.input}
						placeholder="Country"
						name="country"
						type="country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
				</div>
				<div className={styles.dropMenu}>
					<SelectDropDownMenu region={region} setRegion={setRegion} />
				</div>
			</div>
			<div className={styles.stepHandler}>
				<button type="submit">Next</button>
			</div>
		</form>
	);
};

export default EventForm;
