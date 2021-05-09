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
		// photoActions
		// let id = 420
		// let eventId = 5
		// let description = 'sdsd'
		// let descriptionTwo = ''
		// let url = 'sdsdsadsas'
		

				// dispatch(photoActions.editPhoto(id, descriptionTwo))
		// dispatch(photoActions.createPhoto(id,eventId, description, url))
		// dispatch(photoActions.deletePhoto(id))

		
		// ! Calendar
		let eventId = 5
		let time='15:12:17'
		let date='15:12:17'

		

		// dispatch(calendarActions.editCalendar(id, descriptionTwo))
		// dispatch(calendarActions.createCalendar(eventId,time,date))
		dispatch(calendarActions.deleteCalendar(eventId))
		

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
