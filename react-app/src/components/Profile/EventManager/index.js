import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from 'react'
import EventCard from '../../EventCard'
import Slider from 'infinite-react-carousel'
// import './styles.css'

const EventCarousel = ({ images }) => {  
  const settings =  {
    // autoplay: true,
    // autoplaySpeed: 3000,
    // dots: true

  };

  return (
    <>
      {images[0] &&
        <Slider {...settings} className="slider-container">
          {images.map((image) => (
            <div className='slide-container'>
              <img
                className="event-image"
                alt={image.description} src={image.photo_url} />
            </div>
          ))}
        </Slider>
      }
    </>
  );
}

const eventOne={country: "South Africa",
description: "The Gatsby, a south African street food favorite is a delicious, signature sandwich consisting of a crusty, toasted roll that is stuffed with bologna slices, French fries, ketchup, lettuce, and hot piri-piri sauce. In this class you will learn how to make this delicious sandwich and learn about the culinary history of south african food",
event_id: 3,
firstname: "Dre",
region: "Africa",
title: "Cooking South African Street Food"}

const EventManager = () => (
  <Tabs>
    <TabList >
      <Tab>Upcoming Events</Tab>
      <Tab>Past Events</Tab>
    </TabList>

    <TabPanel>
      <div className="eventCard-container grid-container">
        <EventCard event={eventOne} />
        <EventCard event={eventOne} />
        <EventCard event={eventOne} />
        <EventCard event={eventOne} />
              

      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

export default EventManager;
