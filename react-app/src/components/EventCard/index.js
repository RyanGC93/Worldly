import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './styles.css';
import styles from './styles.module.css';
import { BsCalendarFill } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import EventCarousel from './EventCarousel';
import ReactStarsRating from 'react-awesome-stars-rating';
import CalendarModal from '../CalendarModal';
import { deleteAmbassadorEvent } from '../../store/ambassadorEvents';
import CreateModal from '../CreateEventModal';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'

const EventCard = ({ event, isChecked }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const reviews = useSelector((state) => {
		return Object.values(state.reviews).filter((review) => review.event_id === event.event_id);
	});
	
	const images = useSelector((state) => {
		return Object.values(state.photoGallery).filter((photo) => photo.event_id === event.event_id);
	});
	const bookingAvailability = useSelector((state) => {
		return Object.values(state.eventCalendar).filter((booking) => booking.event_id === event.event_id);
	});

	const eventPageRedirect = () => {
		history.push(`/bookings/${event.event_id}`);
	};

	const title = event.title;
	const badge = '';
	let closest_event_time;
	let closest_event_date;
	console.log('event',event)
	const country = event.country;
	const continent = event.region;
	if (bookingAvailability[0]) {
		closest_event_date = bookingAvailability[0].date;
		closest_event_time = bookingAvailability[0].time;
	}
	const description = event.description;
	let value = 0;

	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		if (images) setIsLoaded(true);
	}, [images]);

	for (let element of reviews) value += element.rating;

	const [toggle, setToggle] = useState(true);
	const [showModal, setShowModal] = useState(false);


	const deleteHandler = () => {
		dispatch(deleteAmbassadorEvent(event.event_id))
	}

	console.log(images)
	return (
		<div className={`${styles.cardContainer} ${styles.description}`}>
			{isLoaded && (
				<div className={styles.flipAnimation}>
					{toggle && (
						<section className={styles.itemCard}>
							<div className={styles.itemSummary}>
								<div className={styles.title}>{title}</div>
								<div className={styles.venue}>{badge}</div>
								<address className={styles.address}>
									<div className={styles.addressCountry}>{country} </div>
									<div className={styles.addressContinent}>{continent}</div>
								</address>
							</div>
							<div className={`${styles.imageWrapper} ${styles.carousel}`}>
								{images && (<EventCarousel images={images} />
								)}
								<div className={styles.calendarContainer}>
									{/* Loads User Events */}
									{!isChecked && (
										<>
											<FaCog
												className={styles.calendarIcon}
												style={{ stroke: 'black' }}
												onClick={() => setShowModal(true)}
											/>
											{showModal && (
												<Modal onClose={() => setShowModal(false)}>
													<CalendarModal
														event={event}
														bookingAvailability={bookingAvailability}
														setShowModal={setShowModal}
													/>
												</Modal>
											)}
										</>
									)}
									{/* Loads Ambassador events */}
									{isChecked && (
										<>
											<BsCalendarFill
												className={styles.calendarIcon}
												style={{ stroke: 'black' }}
												onClick={() => setShowModal(true)}
											/>
											{showModal && (
												<Modal onClose={() => setShowModal(false)}>
													<CreateModal
														event={event}
														bookingAvailability={bookingAvailability}
														setShowModal={setShowModal}
													/>
												</Modal>
											)}
										</>
									)}
								</div>
							</div>
							{/* TODO: add this into cost */}
							<div className={styles.itemTimeDate}>
								<time className={styles.date} dateTime="2018-10-16">
									{closest_event_date}
								</time>
								<time className={styles.time} dateTime="19:00">
									{closest_event_time}
								</time>
							</div>
							<div className={`${styles.itemButtons} ${styles.buttonsRow} ${styles.frontButtons}`}>
								<button
									id={styles.btnDetails}
									className={`${styles.btnDetails} ${styles.blue}`}
									aria-label="Learn more about the band and venue"
									onClick={() => setToggle(false)}
								>
									{' '}
									Details
								</button>
								{isChecked ? (
									<a
										className={`${styles.btnTickets} ${styles.blue}`}
										aria-label="Purchase tickets for this event"
									
									>
										EDIT
									</a>
								) : (
									<a
										onClick={deleteHandler}
										className={`${styles.btnTickets} ${styles.blue}`}
									>
										Delete
									</a>
								)}
							</div>
						</section>
					)}
					{/* BACK OF CARD */}
					{!toggle && (
						<section className={styles.itemCardDetails}>
							<div className={styles.bioBlock}>
								<h2 className={styles.title}>{title}</h2>

								<div className={styles.scrollBlock}>
									<p className={styles.bioText}>{description}</p>
								</div>
							</div>
							<div className={styles.moreInfo}>
								<div className={styles.reviewContainer}>
									<div className={styles.starRating}>
										<ReactStarsRating value={value} isEdit={false} size={17} />
									</div>
									<div>#{reviews.length} reviews</div>
								</div>
								<div className={styles.ambassadorContainer}>
									<p>Chef {event.firstname}</p>
									<p>Profile </p>
								</div>
							</div>
							<div className={`${styles.itemButtons} ${styles.back}`}>
								<button
									className={`${styles.btnDetails} ${styles.blue} ${styles.onBack}`}
									onClick={() => setToggle(true)}
								>
									Basic Info
								</button>
								<div
									className={`${styles.btnTickets} ${styles.blue} ${styles.onBack}`}
									onClick={eventPageRedirect}
								>
									Event Page
								</div>
							</div>
						</section>
					)}
				</div>
			)}
		</div>
	);
};

export default EventCard;
