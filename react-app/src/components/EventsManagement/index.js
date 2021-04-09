import React, {useEffect} from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import Map from "../Map";


const EventManagement = ({ isChecked }) => {
  	const userEvents = useSelector((state) => {
		if (isChecked) return Object.values(state.userEvents);
		if (!isChecked) return Object.values(state.ambassadorEvents);
	});

  useEffect(() => {
    if (!userEvents[0]) return
    console.log(userEvents)
	}, [userEvents]);
  

    return (
      <>
        <div className='ambassador-container' >

            
            <Tabs>
    <TabList>
            <Tab className=''>Map</Tab>

            <Tab className=''>Upcoming Events</Tab>

            
    </TabList>

    <TabPanel>
      <Map isChecked={isChecked} className='map-wrapper' />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


{/* 
            <div className='management-container'>
            <div className='event-creator-container'>
            
            </div>
            <div className='event-viewer'>
            
            </div>
            
            
            </div> */}
            



            </div>
        </>
    )    

}

export default EventManagement