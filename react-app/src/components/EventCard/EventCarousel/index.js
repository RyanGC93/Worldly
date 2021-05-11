import React from 'react'
import Slider from 'infinite-react-carousel'
import styles from './styles.module.css'

const EventCarousel = ({ images, isChecked }) => {  
  const settings =  {
    // autoplay: true,
    // autoplaySpeed: 3000,
    // dots: true

  };
  
  console.log(images)

  return (
    <>
      {images[0] &&
        <Slider {...settings} className={styles.slideContainer}>
          {images.map((image) => (
            <div className={styles.imageContainer} key={image.event_id}>
              
              <img
                key={image.photo_id}
                className={styles.eventImage}
                alt={image.description} src={image.url} />
            </div>
          ))}
        </Slider>
      }
    </>
  );
}

export default EventCarousel