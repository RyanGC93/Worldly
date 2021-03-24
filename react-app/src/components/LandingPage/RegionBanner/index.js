import React from "react";
import './styles.css'

const RegionBanner = ({ country }) => {
	console.log(country)
	let images = country.photos
	console.log(photos)
	return (
		<>
			<div className="sizing-container">
				<div className="landing-slide">
				<div id="images-container" class="overlay">
   
   {images.map((image) => ( 
   
	 <div
	   class="region-feature-img"
	   id={image}
	   style={{ backgroundImage:`url(${image})` }}
	   // style={{backgroundImage: "url("{image}")"}}
	 ></div>

   ))}
</div>
<button onClick={handleClick} >click</ button>
<button onClick={handleClickTwo} >click</ button>

</div>
				
				</div>
			</div>
		</>
	);
};
    
export default RegionBanner;
