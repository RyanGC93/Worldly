import "./styles.css";
import MapChart from "./map";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const Map = ({isChecked}) => {
	const [content, setContent] = useState("");

	return (
		<>
			<div className="map-border">
				<MapChart isChecked={isChecked} setTooltipContent={setContent} />
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
			</div>
		</>
	);
};

export default Map;
