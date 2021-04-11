import React from "react";
import styles from './styles.module.css'
import {useHistory} from 'react-router-dom'

const FeatureHeader = () => {
  const history = useHistory()
  const exploreHandler = () => {
    history.push('/events/all')
  }

  return(
    <>
      <div className={styles.mainfeedFeature}>
        <img className='background-img' alt='' src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/128609611_2778529755736748_3306568680532272501_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=n9CJOIK73B0AX_gDJme&_nc_ht=scontent-frt3-1.xx&oh=65543be05183881b985c205858292623&oe=6078C9DB' />  
        
        <div className={styles.mainfeedFeatureInfo} >
          <div className={styles.featureHeader} >
          </div>
          <div className={styles.featureContent} >
            <div className={styles.featureTitle}>Be Adventurous</div>
            <div className={styles.featureContent}>Taste new flavors.             </div>
            <div className={styles.featureContent}>Experience new cultures.
            </div>
            <div className={styles.featureContent}> One bite at a time.</div>
            <div className={styles.exploreBtnContainer} >
              <button className={styles.featureBtn} onClick={exploreHandler}>Explore</button>
              </ div>
          </div>
        </div>
      </div>
    </>
  )

}

export default FeatureHeader