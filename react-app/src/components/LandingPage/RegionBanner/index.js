import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import styles from './styles.module.css';

const RegionBanner = ({ country }) => {
	const history = useHistory();
	let images = country.photos;

	const fadeOut = async () => {
		let prevAct = document.querySelector('.fade-in');
		if (prevAct === null) return;
		prevAct.classList.remove('fade-in');
		prevAct.classList.add('fade-out');
	};
	const fadeIn = async () => {
		let parentQuery = document.getElementById(`${country.short}-imgs`);
		if (!parentQuery) return;
		let children = document.getElementById(`${country.short}-imgs`).children;
		let prev = document.querySelector('.fade-out');
		let child = children[Math.floor(Math.random() * children.length)];
		if (prev !== null) prev.classList.remove('fade-out');
		child.classList.add('fade-in');
	};
	const trial = async () => {
		let parentQuery = document.getElementById(`${country.short}-imgs`);
		let children;
		if (parentQuery) children = parentQuery.children;

		while (children[0]) {
			await fadeIn();
			let parentQuery = document.getElementById(`${country.short}-imgs`);
			if (!parentQuery) return;
			await new Promise((resolve) => setTimeout(resolve, 10000));
			await fadeOut();
			await new Promise((resolve) => setTimeout(resolve, 5000));
		}
		if (!children[0]) trial();
	};
	useEffect(() => {
		trial();
	}, []);

	const regionRedirect = () => {
		history.push(`/events/${country.short}`);
	};

	return (
		<>
			<div className={styles.sizingContainer}>
				<div className={styles.landingSlide}>
					<div id={`${country.short}-imgs`} className={styles.overlay}>
						{images.map((image, index) => (
							<div
								key={index}
								className="region-feature-img"
								id={image}
								style={{ backgroundImage: `url(${image})` }}
							></div>
						))}
					</div>
					<div className={styles.regionFeatureBtn} onClick={regionRedirect}>
						{country.name}
					</div>
				</div>
			</div>
		</>
	);
};

export default RegionBanner;
