import React from 'react'
import './styles.css'
import SlideContainer from "./SlideContainer"
import FeatureHeader from './FeatureHeader'
let countries = require('./countries.json')
const LandingPage = () => {

    return (
        <>
            <FeatureHeader />
            <div className='regions-container' />
            <div className='regions-title'>
                {/* <div>Take a Tasty Trip</div> */}
                Take a Tasty Trip
            </div>
                <div className="regions-feed" >
                    
                <SlideContainer country={countries.africa} />
                <SlideContainer country={countries.asia} />
                <SlideContainer country={countries.southamerica} />
                <SlideContainer country={countries.europe} />
                <SlideContainer country={countries.northamerica} />
                <SlideContainer country={countries.centralamerica} />
                </div>



        </>    
    )
}

export default LandingPage