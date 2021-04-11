import React from "react";
import styles from "./styles.module.css";
import RegionBanner from "./RegionBanner";
import FeatureHeader from "./FeatureHeader";
let countries = require("./countries.json");
const LandingPage = () => {
	return (
		<>
			<FeatureHeader />
			<div className={styles.featureSpacer}></div>
			<div className={styles.regionsTitle}>Take a Tasty Trip</div>
			<div className={styles.regionsFeed}>
				<RegionBanner country={countries.africa} />
				<RegionBanner country={countries.asia} />
				<RegionBanner country={countries.southamerica} />
				<RegionBanner country={countries.europe} />
				<RegionBanner country={countries.northamerica} />
				<RegionBanner country={countries.centralamerica} />
			</div>
		</>
	);
};

export default LandingPage;
