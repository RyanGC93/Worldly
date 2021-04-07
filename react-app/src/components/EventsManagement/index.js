import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const EventManagement = () => {

    return (
        <>
            
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
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
            



        </>
    )    

}

export default EventManagement