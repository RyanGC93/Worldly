import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import Map from '../Map';
import styles from './styles.css';
import EventCard from '../EventCard';
import EventViewer from './EventViewer';
import AmbassadorCalendar from './AmbassadorCalendar';

const EventManagement = ({ isChecked }) => {
	const [upcoming, setUpcoming] = useState([]);
	const [past, setPast] = useState([]);

	const userEvents = useSelector((state) => {
		if (isChecked) return Object.values(state.userEvents);
		if (!isChecked) {
			let events = Object.values(state.ambassadorEvents);
			console.log(events);
			return events;
		}
		});

	let dateNow = new Date();
	let pastEvents = userEvents.filter((ev) => ev.dateObj < dateNow);
	let upcomingEvents = userEvents.filter((ev) => ev.dateObj > dateNow);
	let sortedUpcomingEvents = upcomingEvents.sort((a, b) => a.dateObj - b.dateObj);
	let sortedPastEvents = pastEvents.sort((a, b) => a.dateObj - b.dateObj);
	const contentDivider = (arr) => {
		let newarr = [];
		let i,
			j,
			temparray,
			chunk = 2;
		for (i = 0, j = arr.length; i < j; i += chunk) {
			temparray = arr.slice(i, i + chunk);
			newarr.push(temparray);
		}
		return newarr;
	};
	// let upcomingBookEvents = contentDivider(sortedUpcomingEvents);
	// let pastBookEvents = contentDivider(sortedPastEvents);

	// console.log(upcomingBookEvents, pastBookEvents);

	useEffect(() => {
		console.log('uservents', userEvents);
		if (!userEvents[0]) return;
	}, [userEvents]);

	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Past Events</Tab>
					<Tab>All Events</Tab>
					<Tab>Upcoming Events</Tab>
					<Tab>Map</Tab>
				</TabList>

				{/* UPCOMING EVENTS */}
				<TabPanel>
					{sortedUpcomingEvents.length &&
						sortedUpcomingEvents.map((event) => (
							<div className={styles.gridContainer}>
								<EventCard event={event} />
							</div>
						))}
				</TabPanel>
				{/* ALL EVENTS */}
				<TabPanel>
					{userEvents.length &&
						userEvents.map((event) => (
							<div className={styles.gridContainer}>
								<EventCard event={event} />
							</div>
						))}
				</TabPanel>
				<TabPanel>
					{sortedPastEvents.length &&
						sortedPastEvents.map((event) => (
							<div className={styles.gridContainer}>
								<EventCard event={event} />
							</div>
						))}
				</TabPanel>
				<TabPanel>
					<Map isChecked={isChecked} />
				</TabPanel>
			</Tabs>
		</>
	);
};

export default EventManagement;
