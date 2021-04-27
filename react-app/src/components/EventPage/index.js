import React, { useState,  useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';


const EventPage = () => {
  let { eventId } = useParams()
  // console.log('eventid', eventId)

  // const events = useSelector((state) => {
  //   return Object.values(state.events).filter((event) =>event.event_id === eventId);
  // });

  // const bookingAvailability = useSelector((state) => {
  //   return Object.values(state.eventCalendar).filter((booking) => booking.event_id ===eventId);
  // });
  // const reviews = useSelector((state) => {
  //   return Object.values(state.reviews).filter((review) => review.event_id === eventId);
  // });
  // const images = useSelector((state) => {
  //   return Object.values(state.photoGallery).filter((photo) => photo.event_id === eventId);
  // });

  // console.log(bookingAvailability,images,reviews)



  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
		(async () => {
			const url = `/api/events/bookings/${eventId}`
		  const res = await fetch(url)
			if (!res.ok) console.error(res)
      const data = await res.json()
      console.log(data)
		})();

    
  });

  return (
    <>
      <div>sasdasdasdasd</div>
    </>

  )


}

export default EventPage
