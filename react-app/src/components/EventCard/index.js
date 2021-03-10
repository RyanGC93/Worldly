import React, {useState} from 'react';
import './styles.css'
import {BsCalendar} from 'react-icons/bs'
import EventCarousel from './EventCarousel'

const EventCard = () => {
  const title = 'ADD_TITLE_HERE'
    const badge = 'ADD_BADGE_HERE'
      const country = 'ADD_COUNTRY_HERE'
        const continent = 'ADD_CONTINENT_HERE'
          const closest_event_date = 'ADD_DATE_HERE'
            const closest_event_time = 'ADD_TIME_EVENT'
              const description = 'ADD_Description'
              
                const [toggle,setToggle] = useState(true)
                  return (
                  
                      <div className="card-container">
                      		<div className="flip-animation">
                      		      {toggle && 
                      		        <section className="item-card">
          <div className="item-summary">
                      <h2 className="title">{title}</h2>
                                  <p className="venue">{badge}</p>
                                              <address className="address">
                                                            <p className="address-country">{country} </p>
                                                                          <p className="address-continent">{continent}</p>
            </address>
                      </div>
                                <div className="image-wrapper carousel">
                                            <div className="calendar-container">
                                                          <BsCalendar className='calendar-icon'/>
                                                                      </div>
                                                                      <EventCarousel />
            {/* TODO >> add a carousel */}
                      </div>
                                <div className="item-time-date">
                                            <time className="date" datetime="2018-10-16">{closest_event_date}</time>
                                                        <time className="time" datetime="19:00">{closest_event_time}</time>
                                                                  </div>
                                                                            <div className="item-buttons front-buttons">
            <button className="btn-details grey" aria-label="Learn more about the band and venue" onClick={()=>setToggle(false)}> Details</button>
                        <a className="btn-tickets blue" aria-label="Purchase tickets for this event" href="#">Book</a>
          </div>
        </section>
      }
      {/* BACK OF CARD */}
      {!toggle &&
        <section className="item-card-details">
                  <div className="bio-block">
            <h2 className="title">{title}</h2>
                        <h3 className="bio-title">Bio</h3>
                                  </div>
                                  <div className="scroll-block">
                                    <p className="bio-text">
                                                  {description}
            </p>
          </div>
          <div className="more-info">
          <p>
            <a className="info" aria-label="Visit The Paper Kites website" href="#">The Paper Kites Details</a>	
                      </p>
                      <p>
            <a className="info" aria-label="Visit the venue's website" href="#">Venue Details</a>
                      </p>
                    </div>
                            <div className="item-buttons back">
                                      <button className="btn-details blue on-back" aria-label="Learn more about the band and venue" onClick={()=>setToggle(true)}>Basic Info</button>
                                                <a className="btn-tickets blue on-back" aria-label="Purchase tickets for this event" href="#">Tickets</a>
        </div>
      </section>
      }
	 </div>
	</div>

  )
}

export default EventCard
