import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";

const Passport = () => {
	const passportHandler = (e) => {
		let trial = document.querySelector(".flipBook");
		console.log("passport", e.target, trial);
		trial.classList.add("passport-active");
		alert(e);
	};

	return (
		<div className="passport-container" onClick={(e) => passportHandler(e)}>
			<HTMLFlipBook
								className="flipBook 
								"
								width={350}
								height={533}
								size="stretch"
								minWidth={10}
								maxWidth={3000}
								minHeight={200}
								maxHeight={2533}
								maxShadowOpacity={0.5}
								showCover={true}	
			>
				<div ref="1" className="demoPage passport-shadow ">
					<img className="" src="https://i.imgur.com/mzp2Uub.jpg" />
				</div>
				<div className="demoPage">
					<img src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
					zxc
				</div>
				<div className="demoPage">Page 3</div>
				<div className="demoPage">Page 4</div>
			</HTMLFlipBook>
		</div>
	);
};

export default Passport;
