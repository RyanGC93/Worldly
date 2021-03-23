import React, { useState,useEffect } from "react";
import "./styles.css";
import { BsCalendarFill } from "react-icons/bs";
import EventCarousel from "./EventCarousel";
import ReactStarsRating from "react-awesome-stars-rating";
import CalendarModal from "../CalendarModal";
import { Modal } from "../../context/Modal";
import {useSelector} from 'react-redux'


const EventCard = ({ event }) => {
  const reviews = useSelector((state) => {
    return Object.values(state.reviews).filter((review) => review.event_id === event.event_id);
  });
  const images = useSelector((state) => {
    return Object.values(state.photoGallery).filter((photo) => photo.event_id === event.event_id);
  });
  const bookingAvailability = useSelector((state) => {
    return Object.values(state.eventCalendar).filter((booking) => booking.event_id === event.event_id);
  });
  console.log(bookingAvailability)
  // const reviews = useSelector((state) => state.reviews)
  // console.log('reviews', event)

  
  const title = event.title;
  const badge = '';
  const country = event.country;
  const continent = event.region;
  const closest_event_date = bookingAvailability[0].date;
  const closest_event_time = bookingAvailability[0].time;
  const description = event.description;
  let value = 0;
  
  
  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    if (reviews) setIsLoaded(true);
  }, [reviews]);
  
  for (let element of reviews) value += element.rating

  const [toggle, setToggle] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {isLoaded &&
        <div className="card-container">
          <div className="flip-animation">
            {toggle && (
              <section className="item-card">
                <div className="item-summary">
                  <h2 className="title">{title}</h2>
                  <p className="venue">{badge}</p>
                  <address className="address">
                    <div className="address-country">{country} </div>
                    <div className="address-continent">{continent}</div>
                  </address>
                </div>
                <div className="image-wrapper carousel">
                  <div className="calendar-container">
                    <BsCalendarFill className='calendar-icon' style={{stroke: "black"}}  onClick={() => setShowModal(true)} />
                    {showModal && (
                      
                      <Modal onClose={() => setShowModal(false)}>
                        <CalendarModal setShowModal={setShowModal} />
                      </Modal>
                    )}
                  </div>
                  <EventCarousel images={images} />

                  {/* TODO >> add a carousel */}
                </div>
                <div className="item-time-date">
                  <time className="date" dateTime="2018-10-16">
                    {closest_event_date}
                  </time>
                  <time className="time" dateTime="19:00">
                    {closest_event_time}
                  </time>
                </div>
                <div className="item-buttons front-buttons">
                <button
                    id="btn-details"
                    className="btn-details blue"
                    aria-label="Learn more about the band and venue"
                    onClick={() => setToggle(false)}
                  >
                    {" "}
                    Details
                  </button>
                  <a
                    className="btn-tickets blue"
                    aria-label="Purchase tickets for this event"
                    href="/"
                  >
                    Book
                  </a>
                </div>
              </section>
            )}
            {/* BACK OF CARD */}
            {!toggle && (
              <section className="item-card-details">
                <div className="bio-block">
                  <h2 className="title">{title}</h2>
                  <h3 className="bio-title">Bio</h3>
                </div>
                <div className="scroll-block">
                  <p className="bio-text">{description}</p>
                </div>
                <div className="more-info">
                  <div className="review-container">
                    <div className="star-rating">
                      <ReactStarsRating value={value} isEdit={false} size={17} />
                    <p># of reviews</p>
                    <div>{reviews.length}</div>
                    </div>
                  </div>
                  <div className="ambassador-container">
                    <p>Chef {event.firstname}</p>
                    <p>Profile </p>
                  </div>
                </div>
                <div className="item-buttons back">
                  <button
                    className="btn-details blue on-back"
                    onClick={() => setToggle(true)}
                  >
                    Basic Info
                  </button>
                  <a
                    className="btn-tickets blue on-back"

                  >
                    Event Page
                  </a>
                </div>
              </section>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default EventCard;
