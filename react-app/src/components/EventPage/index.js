import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const EventPage = () => {
	let { eventId } = useParams();
	const [events, setEvents] = useState({});
	const [photoGallery, setPhotoGallery] = useState([]);
	const [eventCalendar, setEventCalendar] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const url = `/api/events/bookings/${eventId}`;
			const res = await fetch(url);
			if (!res.ok) console.error(res);
			const data = await res.json();
			console.log(data.events[0].events_info);
			setEvents(data.events[0].events_info);
			setPhotoGallery(data.events[1].photo_gallery);
			setEventCalendar(data.events[2].event_calendar);
			setReviews(data.events[3].reviews);
			console.log(events, photoGallery, eventCalendar, reviews);
			setIsLoading(false);
			// debugger
		})();
		console.log(events, photoGallery, eventCalendar, reviews);
	}, [isLoading]);

	const settings = {
		infiniteLoop: true,
		autoPlay: true,
		showThumbs: false,
		interval: 5000,
	};

	return (
		<div className={styles.eventPage}>
			<div className={styles.carouselContainer}>
				<Carousel
					className={styles.carouselContainer}
					styling={{ height: "50%" }}
					{...settings}
				>
					{photoGallery.map((photo) => (
						<img
							className={styles.carouselImg}
							key={photo.photo_id}
							src={photo.photo_url}
						/>
					))}
				</Carousel>
			</div>
			<div className={styles.eventTitle}>{events.title}</div>
			<div className={styles.eventInfo}>
				<div>
					<div className={styles}>Chef {events.firstname}</div>
					<div className={styles}>{events.country}, {events.region}</div>

					<div>Check Dates</div>
				</div>
				<div>
					<div className={styles.description}>Description</div>
					<div className={styles}>{events.description}</div>
				</div>
			</div>
			{/* TODO: add Reviews */}
			{/* Show the Total Amount Average of Review and 5 reviews with option to show more */}
		</div>
	);
};

export default EventPage;
