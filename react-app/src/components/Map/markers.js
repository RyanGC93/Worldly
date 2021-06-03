import React from 'react';
import { Marker } from 'react-simple-maps';

const MarkerComponent = ({ name, coordinates, markerOffset }) => {
	return (
		<>
			<Marker className="marker" key={name} coordinates={coordinates}>
				<g
					fill="rgba(255,255,255,0.6)"
					stroke="red"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					transform="translate(-12, -24)"
				>
					<circle cx="12" cy="10" r="3" />
					<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
				</g>
				<defs>
					<filter x="0" y="0" width="1" height="1" id="solid">
						<feFlood result="bg" />
						<feMerge>
							<feMergeNode in="bg" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				<text
					filter="url(#solid)"
					className="marker-text"
					textAnchor="middle"
					y={markerOffset}
					style={{ fontFamily: 'system-ui', fill: 'white' }}
				>
					{name}
				</text>
			</Marker>
		</>
	);
};

export default MarkerComponent;
