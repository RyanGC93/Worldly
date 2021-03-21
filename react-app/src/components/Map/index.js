import "./styles.css";
import MapChart from "./map";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";

const Map = () => {
	const [content, setContent] = useState("");

	return (
		<div className="">
			<div className="map-border">
				<MapChart setTooltipContent={setContent} />
				<ReactTooltip>{content}</ReactTooltip>
				<div className="sticky-note note-1">
					<div className="sticky-tape"></div>
					<div className="content">
						<div className="spacer"></div>
						<div>- Hover over country to get info and select to search </div>
					</div>
				</div>
				<div className="sticky-note note-2">
					<div className="sticky-tape"></div>
					<div className="content">
						<div className="spacer"></div>
						<div>- Click on the passport to manage your itenary</div>
					</div>
				</div>
				<div className="note-3 sticky-note hidden-note">
					<div className="sticky-tape"></div>
					<div className="content">
						<div className="spacer"></div>
						<div>- Push Pin Are Booked Events by User</div>
					</div>
				</div>
				<div className="passport-container">
					<img className="passport" src="https://i.imgur.com/mzp2Uub.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Map;
