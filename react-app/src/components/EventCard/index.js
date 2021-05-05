import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './styles.css';
import styles from './styles.module.css';
import { BsCalendarFill } from 'react-icons/bs';
import EventCarousel from './EventCarousel';
import ReactStarsRating from 'react-awesome-stars-rating';
import CalendarModal from '../CalendarModal';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';



const EventCard = ({ event }) => {
	const history = useHistory();

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
		if (reviews) setIsLoaded(true);
	}, [reviews]);

	for (let element of reviews) value += element.rating;

	const [toggle, setToggle] = useState(true);
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{isLoaded && (
				<div className={`${styles.cardContainer} ${styles.description}`}>
					<div className={styles.flipAnimation}>
						{toggle && (
							<section className={styles.itemCard}>
								<div className={styles.itemSummary}>
									<h2 className={styles.title}>{title}</h2>
									<p className={styles.venue}>{badge}</p>
									<address className={styles.address}>
										<div className={styles.addressCountry}>{country} </div>
										<div className={styles.addressContinent}>{continent}</div>
									</address>
								</div>
								<div className={`${styles.imageWrapper} ${styles.carousel}`}>

                  <EventCarousel images={images} />
									<div className={styles.calendarContainer}>
										<BsCalendarFill
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
									</div>
								</div>
                <div className={styles.itemTimeDate}>
                <time className={styles.date} dateTime="2018-10-16">
                  {closest_event_date}
                </time>
                <time className={styles.time} dateTime="19:00">
                  {closest_event_time}
                </time>
              </div>
              <div
                className={`${styles.itemButtons} ${styles.buttonsRow} ${styles.frontButtons}`}
              >
                <button
                  id={styles.btnDetails}
                  className={`${styles.btnDetails} ${styles.blue}`}
                  aria-label="Learn more about the band and venue"
                  onClick={() => setToggle(false)}
                >
                  {" "}
                  Details
                </button>
                <a
                  className={`${styles.btnTickets} ${styles.blue}`}
                  aria-label="Purchase tickets for this event"
                  onClick={() => setShowModal(true)}
                >
                  Book
                </a>
              </div>
            </section>
						)}
						{/* BACK OF CARD */}
						{!toggle && (
							<section className={styles.itemCardDetails}>
								<div className={styles.bioBlock}>
									<h2 className={styles.title}>{title}</h2>
									<h3 className={styles.bioTitle}>Bio</h3>
								</div>
								<div className={styles.scrollBlock}>
									<p className={styles.bioText}>{description}</p>
								</div>
								<div className={styles.moreInfo}>
									<div className={styles.reviewContainer}>
										<div className={styles.starRating}>
											<ReactStarsRating value={value} isEdit={false} size={17} />
											<p># of reviews</p>
											<div>{reviews.length}</div>
										</div>
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
										onClick={styles.eventPageRedirect}
									>
										Event Page
									</div>
								</div>
							</section>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default EventCard;
