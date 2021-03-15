import "./styles.css";
import MapChart from "./map";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

const Map = () => {
  const [content, setContent] = useState("");
  return (
    <div className="map-container">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Map;
