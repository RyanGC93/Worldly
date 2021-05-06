import EventCard from "../../EventCard";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropSearch from "../DropSearch";
import DropDownMenu from "../../NavBar/DropDownMenu";

const MainFeed = () => {
	const dispatch = useDispatch();
	const eventList = useSelector((state) => Object.values(state.events));
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		console.log(eventList)
		if (eventList[0]) setLoaded(true);
	}, [dispatch, eventList]);

	return (
		<>
			{!eventList && (
				<h1>Loading</h1>
			)}
			
			{loaded && (
				<>
					<div className={styles.eventsFeedTitle}>Events</div>
					{/* <DropSearch /> */}
					<div
						className={`${styles.gridContainer}`}
					>
						{eventList &&
							eventList.map((event) => (
								<EventCard key={event.event_id} event={event} />
							))}
					</div>
				</>
			)}
		</>
	);
};

export default MainFeed;
