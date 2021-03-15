import EventCard from '../../EventCard'
import './styles.css'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'


const MainFeed = () => {
    const dispatch = useDispatch();
    const eventList = useSelector((state) =>
        Object.values(state.events));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(eventList[0]) setLoaded(true);
        console.log(eventList)
    }, [dispatch,eventList]);

    return (
    <>
            {loaded &&
        
            <div className="eventCard-container grid-container">
            {eventList && eventList.map((event) => <EventCard event={event} />)}
        </div>
        }
    </>
    )
}

export default MainFeed