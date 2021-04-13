import React, { useState } from "react";
import styles from './styles.module.css'
/* Form requires ambassador id title descrition, cost, location(lon,lat) */

const EventForm = () => {
	const [errors, setErrors] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [cost, setCost] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");

	const geoHandler = async (e) => {
		e.preventDefault();
		let replacedCity = city.replaceAll(" ", "+");
		let replacedCountry = country.replaceAll(" ", "+");

		let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${replacedCity}%${replacedCountry}&key=${process.env.REACT_APP_GOOGLE_GEO_KEY}`;
		const response = await fetch(url);
		if (!response.ok) return;
		let data = await response.json();
	};

	const onSubmit = async (e) => {
		e.preventDefault();
	};
	const check = (e) => {};

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
				<label className={styles.label} htmlFor="cost">
					cost
				</label>
				<input
					required
					className={styles.input}
					name="cost"
					type="text"
					value={cost}
					onChange={(e) => setCost(e.target.value)}
				/>
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="description">
					Description
				</label>
				<input
					required
					className={styles.input}
					name="description"
					type="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="city">
					City
				</label>
				<input
					className={styles.input}
					required
					name="city"
					type="city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
			</div>
			<div className={styles.group}>
				<label className={styles.label} htmlFor="country">
					Country
				</label>
				<input
					className={styles.input}
					required
					name="country"
					type="country"
					value={country}
					onChange={check}
					// onChange={(e)=> setCountry(e.target.value)}
				/>
			</div>
			<div onClick={geoHandler}>Geo test</div>
			<button type="submit">Next</button>
		</form>
	);
};

export default EventForm;
