import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	useZoomPan,
	ComposableMap,
	Geographies,
	Geography,
} from "react-simple-maps";

import MarkerComponent from './markers'

const geoUrl =
	"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// coordinates are stored as >> [lon,lat]
const rounded = (num) => {
	if (num > 1000000000) {
		return Math.round(num / 100000000) / 10 + "Bn";
	} else if (num > 1000000) {
		return Math.round(num / 100000) / 10 + "M";
	} else {
		return Math.round(num / 100) / 10 + "K";
	}
};


const CustomZoomableGroup = ({ children, ...restProps }) => {
	const { mapRef, transformString, position } = useZoomPan(restProps);
	return (
		<g ref={mapRef}>
			<rect fill="transparent" />
			<g transform={transformString}>{children(position)}</g>
		</g>
	);
};

const MapChart = ({ setTooltipContent, isChecked }) => {
	const userEvents = useSelector((state) => {
		if (isChecked) return Object.values(state.userEvents);
		if (!isChecked) return Object.values(state.ambassadorEvents);
	});

	useEffect(() => {
		if(!userEvents[0] ) return
	}, [userEvents]);
	let markers = [];
	userEvents.forEach((event) => {
		markers.push({
			markerOffset: -30,
			name: `${event.title}`,
			coordinates: [event.location_longitude, event.location_latitude],
			id: event.event_id
		});
		console.log(markers,'markers')
	});



	if (!userEvents) return null;
	return (
		<>
			<div>
				<ComposableMap data-tip="" projectionConfig={{ scale: 220 }}>
					<CustomZoomableGroup center={[0, 0]}>
						{(position) => (
							<>
								<Geographies geography={geoUrl}>
									{({ geographies }) =>
										geographies.map((geo) => (
											<Geography
												key={geo.rsmKey}
												geography={geo}
												onMouseEnter={() => {
													const { NAME, POP_EST, ABBREV } = geo.properties;
													setTooltipContent(
														`${NAME} — ${rounded(POP_EST)} - ${ABBREV}`
													);
												}}
												onMouseLeave={() => {
													setTooltipContent("");
												}}
												style={{
													default: {
														fill: "#D6D6DA",
														outline: "none",
													},
													hover: {
														fill: "#F53",
														outline: "none",
													},
													pressed: {
														fill: "#E42",
														outline: "none",
													},
												}}
											/>
										))
									}
								</Geographies>
								{markers.map(({ name, coordinates, markerOffset, id }) => (
									<MarkerComponent key={id} name={name} coordinates={coordinates} markerOffset={markerOffset}/>
					// 				<Marker
					// 					className="marker"
					// 					key={name}
					// 					coordinates={coordinates}
					// 				>
					// 					<g
					// 						fill="rgba(255,255,255,0.6)"
					// 						stroke="red"
					// 						strokeWidth="2"
					// 						strokeLinecap="round"
					// 						strokeLinejoin="round"
					// 						transform="translate(-12, -24)"
					// 					>
					// 						<circle cx="12" cy="10" r="3" />
					// 						<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
					// 					</g>
					// 					<defs>
					// 						<filter x="0" y="0" width="1" height="1" id="solid">
					// 							<feFlood result="bg" />
					// 							<feMerge>
					// 								<feMergeNode in="bg" />
					// 								<feMergeNode in="SourceGraphic" />
					// 							</feMerge>
					// 						</filter>
					// 					</defs>
                    // <text
                    //   filter="url(#solid)"
					// 						className="marker-text"
					// 						textAnchor="middle"
					// 						y={markerOffset}
					// 						style={{ fontFamily: "system-ui", fill: "white" }}
					// 					>
					// 						{name}
					// 					</text>
					// 				</Marker>
								))}
							</>
						)}
					</CustomZoomableGroup>
				</ComposableMap>
			</div>
		</>
	);
};

export default memo(MapChart);
