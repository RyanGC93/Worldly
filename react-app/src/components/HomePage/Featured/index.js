import React from 'react'
import Slider from 'infinite-react-carousel'
import './styles.css'

const Featured = () => {


  const settings =  {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true

  };
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>Featured</div>
      <Slider { ...settings }>
        <div className='slide-container'>
          <img className='featured-image' alt="Image: West African - style Jollof rice " class="u-photo" itemprop="image" src="https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/4346/letterbox_jollof_TF.jpg"/>
        </div >
        <div className='slide-container'>
          <img className='featured-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='featured-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='featured-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
        <div className='slide-container'>
          <img className='featured-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR1hxcP6j2sXLA0_RJZsm67USiTwNfAzPcA&usqp=CAU' />
        </div >
      
      </Slider>
    </div >
  );
}

export default Featured