import React, { useState, useEffect } from "react";
import "./styles.css";

const RegionBanner = ({ country }) => {
	const [childrenList, setChildrenList] = useState("");
	const [activeChild, setActiveChild] = useState("");
	let images = country.photos;

	const fadeOut = async () => {
		let prevAct = document.querySelector(".fade-in");
		if (prevAct === null) return;
		prevAct.classList.remove("fade-in");
		prevAct.classList.add("fade-out");
	};
	const fadeIn = async () => {
		let children = document.getElementById(`${country.short}-imgs`).children;
		let prev = document.querySelector(".fade-out");
		let child = children[Math.floor(Math.random() * children.length)];
		console.log(child, "child");

		if (prev !== null) prev.classList.remove("fade-out");

		child.classList.add("fade-in");
	};

	const trial = async () => {
		// alert()
		let children = document.getElementById(`${country.short}-imgs`).children;

		while (children[0]) {
			await fadeIn();
			await new Promise((resolve) => setTimeout(resolve, 10000));
			await fadeOut();
			await new Promise((resolve) => setTimeout(resolve, 5000));
		}
		//  if(!children[0]) trial()
	};
	useEffect(() => {
		trial()
	},[])

	return (
		<>
			<div className="sizing-container">
				<div className="landing-slide">
					<div id={`${country.short}-imgs`} className="overlay">
						{images.map((image) => (
							<div
								className="region-feature-img"
								id={image}
								style={{ backgroundImage: `url(${image})` }}
								// style={{backgroundImage: "url("{image}")"}}
							></div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RegionBanner;
