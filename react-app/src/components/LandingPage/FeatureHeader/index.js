import React from "react";
import './styles.css'
import {useHistory} from 'react-router-dom'

const FeatureHeader = () => {
  const history = useHistory()
  const exploreHandler = () => {
    history.push('/events/')
  }

  return(
    <>
      <div className='mainfeed-feature'>
        <img className='background-img' src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/128609611_2778529755736748_3306568680532272501_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=n9CJOIK73B0AX_gDJme&_nc_ht=scontent-frt3-1.xx&oh=65543be05183881b985c205858292623&oe=6078C9DB' />  
        
        <div className='mainfeed-feature-info' >
          <div className='feature-header' >
          </div>
          <div className='feature-content' >
            <div className='feature-title'>Be Adventurous</div>
            <div className='feature-content'>Taste new flavors.             </div>
            <div className='feature-content'>Experience new cultures.
            </div>
            <div className='feature-content'> One bite at a time.</div>
            <div className='explore-btn-container' >
              <button className='feature-btn' onClick={exploreHandler}>Explore</button>
              </ div>
          </div>
        </div>
      </div>

    </>
  )

}

export default FeatureHeader