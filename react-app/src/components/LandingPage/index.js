import React from "react";
import styles from "./styles.module.css";
import RegionBanner from "./RegionBanner";
import {useDispatch} from 'react-redux'
import FeatureHeader from "./FeatureHeader";
// !TEST
import * as photoActions from "../../store/photoGallery"
import * as calendarActions from "../../store/eventCalendar"

let countries = require("./countries.json");
const LandingPage = () => {
	const dispatch = useDispatch();

	const practiceRoute = () => {


		
		// ! Calendar
		let eventId = 5
		let dateToday = new Date();
		let time='13:21:18'
		let date='	2021-05-15'
		

		dispatch(calendarActions.createCalendar(eventId,time,date))
		// dispatch(calendarActions.deleteCalendar(eventId))
		

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
