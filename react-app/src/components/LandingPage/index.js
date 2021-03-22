import React from 'react'
import './styles.css'
import FeatureHeader from './FeatureHeader'
import SlideContainer from "./SlideContainer"
const LandingPage = () => {

    return (
        <>
            <FeatureHeader />
            <div className='regions-container' />
            <div className='regions-title'>Take your taste buds on a trip
            </div>
                <div className="regions-feed" >
                    
                    <SlideContainer />
                </div>



        </>    
    )
}

export default LandingPage