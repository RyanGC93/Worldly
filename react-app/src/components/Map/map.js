import React, { memo, useEffect } from "react";
import { useSelector } from 'react-redux';
import {
  useZoomPan,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  // [lon,lat]
// const markers = [
//   {
//     markerOffset: -30,
//     name: "Cooking South African Street Food",
//     coordinates: [18.423300,-33.918861]
//   },

// ];

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  // const width = 500;
  // const height = 500;
  const userEvents = useSelector((state) =>
    Object.values(state.userEvents));
  // let userEvent = useSelector((state) => state.userEvents);
  
  let markers = [];
  userEvents.forEach((event) => {
    markers.push(
      { markerOffset: -30,
        name: `${event.title}`,
        coordinates: [event.location_longitude,event.location_latitude]}
    )
    
  })
  console.log(userEvents,'userEvents')





  const CustomZoomableGroup = ({ children, ...restProps }) => {
    const { mapRef, transformString, position } = useZoomPan(restProps);
    return (
      <g ref={mapRef}>
        <rect fill="transparent" />
        <g transform={transformString}>{children(position)}</g>
      </g>
    );
  };

  return (
  <>
    {/* { userEvents[0] & */}
    <div>
      <ComposableMap
        // width={width}
        // height={height}
        data-tip=""
        projectionConfig={{ scale: 220 }}
      >
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
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
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
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "black" }}
                  >
                    {/* {name} */}
                  </text>
                </Marker>
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
