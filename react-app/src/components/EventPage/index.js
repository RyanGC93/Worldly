import React, { useState,  useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';


const EventPage = () => {
  let { eventId } = useParams()
  console.log('eventid', eventId)

  const events = useSelector((state) => {
    return Object.values(state.events).filter((event) =>event.event_id ===eventId);
  });

  const bookingAvailability = useSelector((state) => {
    return Object.values(state.eventCalendar).filter((booking) => booking.event_id ===eventId);
  });
  const reviews = useSelector((state) => {
    return Object.values(state.reviews).filter((review) => review.event_id === eventId);
  });
  const images = useSelector((state) => {
    return Object.values(state.photoGallery).filter((photo) => photo.event_id === eventId);
  });

  console.log(bookingAvailability,images,reviews)



  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    // if (reviews && images && bookingAvailability) setIsLoaded(true);
    console.log(reviews,images)
  }, [reviews]);

  return (
    <>
      <div>sasdasdasdasd</div>
    </>

  )


}

export default EventPage