import React from 'react'
import Slider from 'infinite-react-carousel'
import styles from './styles.module.css'

const EventCarousel = ({ images }) => {  
  const settings =  {
    // autoplay: true,
    // autoplaySpeed: 3000,
    // dots: true

  };
  return (
    <>
      {images[0] &&
        <Slider {...settings} className={styles.slideContainer}>
          {images.map((image) => (
            <div className={styles.slideContainer} key={image.event_id}>
              <img
                key={image.photo_id}
                className={styles.eventImage}
                alt={image.description} src={image.photo_url} />
            </div>
          ))}
        </Slider>
      }
    </>
  );
}

export default EventCarousel