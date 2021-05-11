import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import Map from '../Map';
import styles from './styles.module.css';
import EventCard from '../EventCard';
import './tabs.css';

const EventManagement = ({ isChecked }) => {
	const userEvents = useSelector((state) => {
		if (isChecked) return Object.values(state.userEvents);
		if (!isChecked) {
			let events = Object.values(state.ambassadorEvents);
			console.log(state.ambassadorEvents)
			return events;
		}
	});

	let dateNow = new Date();
	let pastEvents = userEvents.filter((ev) => ev.dateObj < dateNow);
	let upcomingEvents = userEvents.filter((ev) => ev.dateObj > dateNow);
	let sortedUpcomingEvents = upcomingEvents.sort((a, b) => a.dateObj - b.dateObj);
	let sortedPastEvents = pastEvents.sort((a, b) => a.dateObj - b.dateObj);

	useEffect(() => {
		if (!userEvents[0]) return;
	}, [userEvents, sortedUpcomingEvents]);

	const AddEventsScreen = () => {
		return <h1>Loading</h1>;
	};

	return (
		<>
			<Tabs>
				<TabList className={styles.tabList}>
					{/* <Tab className={styles.tab}>Upcoming Events</Tab> */}
					<Tab className={styles.tab}>All Events</Tab>
					{/* <Tab className={styles.tab}>Past Events</Tab> */}
					<Tab className={styles.tab}>Map</Tab>
				</TabList>

				{/* UPCOMING EVENTS */}
				{/* <TabPanel>
					{sortedUpcomingEvents[0] && (
						<div className={styles.gridContainer}>
							{sortedUpcomingEvents.map((event) => (
								<div className={styles.cardContainer}>
									<EventCard isChecked={isChecked} key={event.booking_id} event={event} />
								</div>
							))}
						</div>
					)}
				</TabPanel> */}
				{/* ALL EVENTS */}
				<TabPanel>
					{userEvents[0] ? (
						<div className={styles.gridContainer}>
							{userEvents.map((event) => (
								<EventCard isChecked={isChecked} key={event.booking_id} event={event} />
							))}
						</div>
					) : (
						<AddEventsScreen />
					)}
				</TabPanel>
				{/* PAST EVENTS*/}
				{/* <TabPanel>
					{sortedPastEvents[0] ? (
						<div className={styles.gridContainer}>
							{sortedPastEvents.map((event) => (
								<EventCard isChecked={isChecked} key={event.booking_id} event={event} />
							))}
						</div>
					) : (
						<AddEventsScreen />
					)}
				</TabPanel> */}

				<TabPanel>
					<Map isChecked={isChecked} />
				</TabPanel>
			</Tabs>
		</>
	);
};

export default EventManagement;
