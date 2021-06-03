import styles from './styles.module.css';
import './styles.css';
import MapChart from './map';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Map = ({ isChecked }) => {
	const [content, setContent] = useState('');

	return (
		<>
			<div className="map-border">
				<MapChart isChecked={isChecked} setTooltipContent={setContent} />
				<ReactTooltip>{content}</ReactTooltip>
				<div className={`${styles.stickyNote} ${styles.noteOne}`}>
					<div className={styles.stickyTape}></div>
					<div className={styles.content}>
						<div>- Hover over country to get info and select to search </div>
					</div>
				</div>
				<div className={`${styles.stickyNote} ${styles.noteTwo}`}>
					<div className={styles.stickyTape}></div>
					<div className={styles.content}>
						<div>- Click on the passport to manage your itenary</div>
					</div>
				</div>
				<div className={`${styles.stickyNote} ${styles.noteThree}`}>
					<div className={styles.stickyTape}></div>
					<div className={styles.content}>
						<div>- Push Pin Are Booked Events by User</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Map;
