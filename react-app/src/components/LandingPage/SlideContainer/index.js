import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";


const SlideContainer = ({country}) => {
  
  
  const handleClick = () =>{
      let clicker = document.querySelector('trial')
  }
  
  return (
    <>
      <div className="sizing-container">
        <div className="landing-slide">
          <div className="slide-title">{country.name}</div>
          <div className="content-container trial">
            <div className="column-left">
              <div className="slide-pic-container">
                <img
                  className="slide-picture"
                  src={country.photos[0]}
                />
              </div>
              <div className='scroll-title'>Info</div>
              <div id="scroll-1" className="country-info-scroll">
                {country.info}
              </div>
              <div className='explore-btn' onClick={handleClick}>Explore country</div>
            </div>
            <div className="column-right">

              <div className="grid-pic small-pic-1">
                                <img
                  className="slide-picture"
                  src={country.photos[1]}
                />
              </div>
              <div className="grid-pic small-pic-2">
                                <img
                  className="slide-picture"
                  src={country.photos[2]}
                />
              </div>
              <div className="grid-pic small-pic-3">
              <img
              className="slide-picture"
              src={country.photos[3]}
            />
              </div>
              <div className="grid-pic small-pic-4">
              <img
              className="slide-picture"
              src={country.photos[4]}
            />
              </div>
              <div className="grid-pic small-pic-5">
              <img
                  className="slide-picture"
                  src={country.photos[5]}
                />
              </div>
              <div className="grid-pic small-pic-6">
              <img
                  className="slide-picture"
                  src={country.photos[6]}
                />
              </div>
              {/* <button>See Events</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideContainer;
