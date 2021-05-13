import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CalendarModal from '../CalendarModal';
import { Modal } from '../../context/Modal';
import { BsCalendarFill } from 'react-icons/bs';

import ReviewRow from './ReviewRow';

const EventPage = () => {
	const [showModal, setShowModal] = useState(false);
	let { eventId } = useParams();
	const [event, setEvent] = useState({});
	const [photoGallery, setPhotoGallery] = useState([]);
	const [eventCalendar, setEventCalendar] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [reviewToggle, setReviewToggle] = useState(true);

	let baseReviews = reviews.slice(0, 3);
	let additionalReviews = reviews.slice(3);

	useEffect(() => {
		(async () => {
			const url = `/api/events/bookings/${eventId}`;
			const res = await fetch(url);
			const data = await res.json();
			setEvent(data.events[0].events_info);
			setPhotoGallery(data.events[1].photo_gallery);
			let eventCalendarAdded = data.events[2].event_calendar;
			eventCalendar.forEach((event) => {
				event['dateObj'] = new Date(`${event.date} ${event.time}`);
			});

			setEventCalendar(eventCalendarAdded);
			setReviews(data.events[3].reviews);
			setIsLoaded(true);
		})();
	}, []);

	const settings = {
		infiniteLoop: true,
		autoPlay: true,
		showThumbs: false,
		interval: 5000,
	};

	return (
		<>
			{isLoaded &&(
				<div className={styles.eventPage}>
					<div className={styles.carouselContainer}>
						<Carousel className={styles.carouselWrapper} styling={{ height: '50%' }} {...settings}>
							{photoGallery.map((photo) => (
								<img className={styles.carouselImg} key={photo.photo_id} alt="" src={photo.url} />
							))}
						</Carousel>
					</div>
					<div className={styles.eventTitle}>{event.title}</div>
					<div className={styles.eventInfo}>
						<div className={styles.infoText}>Chef {event.firstname}</div>
						<div className={styles.infoText}>
							{event.country}, {event.region}
						</div>
						{eventCalendar[0] && (
							<div className={`${styles.infoText} ${styles.booking}`} onClick={() => setShowModal(true)}>
								Explore Dates
							</div>
						)}

						{showModal && (
							<Modal onClose={() => setShowModal(false)}>
								<CalendarModal event={event} setShowModal={setShowModal} />
							</Modal>
						)}
					</div>
					<div>
						<div className={styles.descriptionTitle}>Description</div>
						<div className={styles.description}>{event.description}</div>
					</div>
					{/* */}
					<div className={styles.eventTitle}>Reviews</div>
					{/* First three reviews */}
					{baseReviews[0] && baseReviews.map((review) => <ReviewRow key={review.reviewId} review={review} />)}
					{reviewToggle && (
						<div className={styles.toggleBtnContainer} onClick={() => setReviewToggle()}>
							{additionalReviews[0] && <div className={styles.toggle}>Show More Reviews</div>}
						</div>
					)}
					{!reviewToggle &&
						additionalReviews.map((review) => <ReviewRow key={review.reviewId} review={review} />)}

					{/* Show less button */}
					{!reviewToggle && (
						<div className={styles.toggleBtnContainer}>
							<div className={styles.toggle} onClick={() => setReviewToggle(true)}>
								Show Less
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default EventPage;
