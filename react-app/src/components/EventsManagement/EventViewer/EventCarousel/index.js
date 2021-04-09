import React from 'react'
import Slider from 'infinite-react-carousel'
import './styles.css'

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
            <div className='slide-container' key={image.event_id}>
              <img
                key={image.photo_id}
                className="event-image"
                alt={image.description} src={image.photo_url} />
            </div>
          ))}
        </Slider>
      }
    </>
  );
}

export default EventCarousel