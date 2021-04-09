import React, {useEffect, useState} from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import Map from "../Map";
import './styles.css'
import EventViewer from './EventViewer'
import Slider from 'infinite-react-carousel'
import AmbassadorCalendar from './AmbassadorCalendar'

const EventManagement = ({ isChecked }) => {

  	const userEvents = useSelector((state) => {
		if (isChecked) return Object.values(state.userEvents);
		if (!isChecked) return Object.values(state.ambassadorEvents);
	});

  useEffect(() => {
    if (!userEvents[0]) return

    
	}, [userEvents]);
  
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

  const dividedContent = contentDivider(userEvents)
  console.log(dividedContent, "divided")

  const events = userEvents.map((event) => event.event_id)
  const uniqueEvents = Array.from(new Set(events))

    return (
      <>
  <Tabs>
    <TabList>
            <Tab>All Events</Tab>
            <Tab>Upcoming Events</Tab>
      <Tab>Map</Tab>
    </TabList>

    <TabPanel>
      {/* <AmbassadorCalendar /> */}
    </TabPanel>
          <TabPanel>
            <div className='ambassador-slider'>
      <Slider >
                {dividedContent && dividedContent.map((event) => (
                  <div className='ambassador-slide'>

                  {
                    event[0] &&
                    <EventViewer event={event[0]} />
                    
                    }
                      {
                    event[1] &&
                    <EventViewer event={event[1]} />
                    
                    }  
                  </div>

                ))}
              </Slider>

            </div>
    </TabPanel>
    <TabPanel>
      <Map isChecked={isChecked}/>
    </TabPanel>      
  </Tabs>

        </>
    )    

}

export default EventManagement