import React from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

const FeatureHeader = () => {
	const history = useHistory();
	const exploreHandler = () => {
		history.push('/events/all');
	};

	return (
		<>
			<div className={styles.mainfeedFeature}>
				<img
					className="background-img"
					alt=""
					src="https://images.pexels.com/photos/4134514/pexels-photo-4134514.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				/>

				<div className={styles.mainfeedFeatureInfo}>
					<div className={styles.featureHeader}></div>
					<div className={styles.featureContent}>
						<div className={styles.featureTitle}>Be Adventurous</div>
						<div className={styles.featureContent}>Taste new flavors. </div>
						<div className={styles.featureContent}>Experience new cultures.</div>
						<div className={styles.featureContent}> One bite at a time.</div>
						<div className={styles.exploreBtnContainer}>
							<button className={styles.featureBtn} onClick={exploreHandler}>
								Explore
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeatureHeader;
