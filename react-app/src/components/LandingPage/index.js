import React from "react";
import styles from "./styles.module.css";
import RegionBanner from "./RegionBanner";
import {useDispatch} from 'react-redux'
import FeatureHeader from "./FeatureHeader";
import * as photoActions from "../../store/photoGallery"
let countries = require("./countries.json");
const LandingPage = () => {
	const dispatch = useDispatch();

	const practiceRoute = () => {
		let id = 2
		dispatch(photoActions.createPhotom)
		dispatch(photoActions.deletePhoto(id))

	}
	
	return (
		<>
			<FeatureHeader />

			<button  onClick={practiceRoute}>Practice Button</button>
			<div  className={styles.featureSpacer}></div>
			<div className={styles.regionsTitle}>Take a Tasty Trip</div>
			<div className={styles.regionsFeedContainer}>
				<div className={styles.regionsFeed}>
					<RegionBanner country={countries.africa} />
					<RegionBanner country={countries.asia} />
					<RegionBanner country={countries.southamerica} />
					<RegionBanner country={countries.europe} />
					<RegionBanner country={countries.northamerica} />
					<RegionBanner country={countries.centralamerica} />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
