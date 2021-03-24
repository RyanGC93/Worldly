import React from 'react'
import './styles.css'
import SlideContainer from "./SlideContainer"
import RegionBanner from "./RegionBanner"
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
            <RegionBanner country={countries.africa} />
                <RegionBanner country={countries.asia} />
                <RegionBanner country={countries.southamerica} />
                <RegionBanner country={countries.europe} />
                <RegionBanner country={countries.northamerica} />
                <RegionBanner country={countries.centralamerica} />
                    
                {/* <SlideContainer country={countries.africa} />
                <SlideContainer country={countries.asia} />
                <SlideContainer country={countries.southamerica} />
                <SlideContainer country={countries.europe} />
                <SlideContainer country={countries.northamerica} />
                <SlideContainer country={countries.centralamerica} /> */}
                </div>



        </>    
    )
}

export default LandingPage