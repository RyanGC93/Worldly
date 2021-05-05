import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import Map from '../Map';
import styles from './styles.module.css';
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
		if (!userEvents[0]) return;
	}, [userEvents,sortedUpcomingEvents]);

	const AddEventsScreen = () => {
		return <h1>Loading</h1>;
	};

	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Upcoming Events</Tab>
					<Tab>All Events</Tab>
					<Tab>Past Events</Tab>
					<Tab>Map</Tab>
				</TabList>

				{/* UPCOMING EVENTS */}
				<TabPanel>
					{sortedUpcomingEvents.length && (
						<div className={styles.gridContainer}>
							{sortedUpcomingEvents.map((event) => (
								<EventCard event={event} />
							))}
						</div>
					)}
			
				</TabPanel>
				{/* ALL EVENTS */}
				<TabPanel>
				{userEvents.length ? (
						<div className={styles.gridContainer}>
							{userEvents.map((event) => (
								<EventCard event={event} />
							))}
						</div>
					) : (
						<AddEventsScreen />
					)}
				</TabPanel>
				{/* PAST EVENTS*/}
				<TabPanel>
				{sortedPastEvents.length ? (
						<div className={styles.gridContainer}>
							{sortedPastEvents.map((event) => (
								<EventCard event={event} />
							))}
						</div>
					) : (
						<AddEventsScreen />
					)}
				</TabPanel>
				{/* MAP */}
				<TabPanel>
					<Map isChecked={isChecked} />
				</TabPanel>
			</Tabs>
		</>
	);
};

export default EventManagement;
