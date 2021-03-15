import React from 'react'
import Slider from 'infinite-react-carousel'
import './styles.css'

const Event = () => {


  const settings =  {
    // autoplay: true,
    // autoplaySpeed: 3000,
    // dots: true

  };
  return (
    <>

      <Slider { ...settings } className="slider-container">
        <div className='slide-container'>
          <img className='event-image' alt="West African - style Jollof rice "   src="https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/4346/letterbox_jollof_TF.jpg"/>
        </div >
        <div className='slide-container'>
          <img className='event-image' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='event-image' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='event-image' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='event-image' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
      
      </Slider>
    </>
  );
}

export default Event