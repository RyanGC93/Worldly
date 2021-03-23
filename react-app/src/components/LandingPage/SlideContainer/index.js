import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

const SlideContainer = ({ country }) => {
  const history = useHistory()
  
  
  const handleClick = () => {
    alert()
      history.push('/events/')
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
                  alt=''
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
                  alt=''
                />
              </div>
              <div className="grid-pic small-pic-2">
                                <img
                  className="slide-picture"
                  src={country.photos[2]}
                  alt=''
                />
              </div>
              <div className="grid-pic small-pic-3">
              <img
              className="slide-picture"
                  src={country.photos[3]}
                  alt=''
            />
              </div>
              <div className="grid-pic small-pic-4">
              <img
              className="slide-picture"
                  src={country.photos[4]}
                  alt=''
            />
              </div>
              <div className="grid-pic small-pic-5">
              <img
                  className="slide-picture"
                  src={country.photos[5]}
                  alt=''
                />
              </div>
              <div className="grid-pic small-pic-6">
              <img
                  className="slide-picture"
                  src={country.photos[6]}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideContainer;
