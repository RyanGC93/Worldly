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
	const [events, setEvents] = useState({});
	const [photoGallery, setPhotoGallery] = useState([]);
	const [eventCalendar, setEventCalendar] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let baseReviews = reviews.slice(0, 3);
	let additionalReviews = reviews.slice(3);

	useEffect(() => {
		(async () => {
			const url = `/api/events/bookings/${eventId}`;
			const res = await fetch(url);
			const data = await res.json();
			setEvents(data.events[0].events_info);
			setPhotoGallery(data.events[1].photo_gallery);
			setEventCalendar(data.events[2].event_calendar);
			setReviews(data.events[3].reviews);
			setIsLoading(false);
			// debugger
			console.log(data, 'reviews');
		})();
	}, []);

	const settings = {
		infiniteLoop: true,
		autoPlay: true,
		showThumbs: false,
		interval: 5000,
	};
	console.log(eventCalendar);

	return (
		<div className={styles.eventPage}>
			<div className={styles.carouselContainer}>
				<Carousel className={styles.carouselWrapper} styling={{ height: '50%' }} {...settings}>
					{photoGallery.map((photo) => (
						<>
							<img className={styles.carouselImg} key={photo.photo_id} src={photo.photo_url} />
						</>
					))}
				</Carousel>
			</div>
			<div className={styles.eventTitle}>{events.title}</div>
			<div className={styles.eventInfo}>
				<div>
					<div className={styles}>Chef {events.firstname}</div>
					<div className={styles}>
						{events.country}, {events.region}
					</div>
					{eventCalendar.length && (
						<>
							<BsCalendarFill
								className={styles.calendarIcon}
								style={{ stroke: 'black' }}
								onClick={() => setShowModal(true)}
							/>
							{showModal && (
								<Modal onClose={() => setShowModal(false)}>
									<CalendarModal bookingAvailability={eventCalendar} setShowModal={setShowModal} />
								</Modal>
							)}
							<div onClick={() => console.log(eventCalendar)} >trial</div>
						</>
					)}
				</div>

				{showModal && (
					<Modal onClose={() => setShowModal(false)}>
						<CalendarModal setShowModal={setShowModal} />
					</Modal>
				)}
				<div>
					<div className={styles.descriptionTitle}>Description</div>
					<div className={styles.description}>{events.description}</div>
				</div>
			</div>
			{/* */}
			<div className={styles.eventTitle}>Reviews</div>
			{baseReviews && baseReviews.map((review) => <ReviewRow key={review.reviewId} review={review} />)}
			<div> All Reviews</div>

			{additionalReviews &&
				additionalReviews.map((review) => <ReviewRow key={review.reviewId} review={review} />)}
		</div>
	);
};

export default EventPage;
