import "./styles.css";
import MapChart from "./map";
import React, { useState,useEffect } from "react";
import { useSelector } from 'react-redux'
import ReactTooltip from "react-tooltip";

const Map = () => {
	const [content, setContent] = useState("");

  

	return (
    <div className='' >
		  <div className="map-border">

				<MapChart setTooltipContent={setContent}  />
				<ReactTooltip>{content}</ReactTooltip>

		  </div>
    </div>
	);
};

export default Map;
