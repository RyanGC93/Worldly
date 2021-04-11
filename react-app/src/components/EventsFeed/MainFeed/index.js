import EventCard from "../../EventCard";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropSearch from '../DropSearch'
import DropDownMenu from "../../NavBar/DropDownMenu";

const MainFeed = () => {
	const dispatch = useDispatch();
	const eventList = useSelector((state) => Object.values(state.events));

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (eventList[0]) setLoaded(true);
	}, [dispatch, eventList]);

	return (
		<>
			{loaded && (
                <>
                    <div className='eventsfeed-title'>
					Events
                        <DropSearch />
					
					</div>
				
					<div className="eventCard-container grid-container">
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