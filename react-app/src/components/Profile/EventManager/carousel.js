import Slider from 'infinite-react-carousel'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import EventCard from '../../EventCard'

const EventCarousel = ({ images }) => {
    const userEvents = useSelector((state) =>
    Object.values(state.userEvents));
    
    const settings = {
      // autoplay: true,
      // autoplaySpeed: 3000,
      // dots: true
  
    };
    useEffect(() =>{
    
    }, [userEvents])
    if (!userEvents) return null
    


    return (
      <>
        {/* {images[0] &&
          <Slider {...settings} className="slider-container">
            {images.map((image) => (
              <div className='slide-container'>
                <img
                  className="event-image"
                  alt={image.description} src={image.photo_url} />
              </div>
            ))}
          </Slider>
        } */}
      </>
    );
}
  
export default EventCarousel
  