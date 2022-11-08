import React from "react";

const MapSVG = ({ kraj, setKraj }) => {
  const RegionClick = (e) => {
    console.log(e.target.attributes.getNamedItem("name").value);
    setKraj(e.target.attributes.getNamedItem("name").value);
  };

  const RED = "#FF4545";
  const GREEN = "#52FF68";
  const BLUE = "#4EBAFF";
  const BASE_STROKE_COLOR = "black";
  const BASE_STROKE_WIDTH = "4";

  return (
    <>
      <svg
        stroke="#303030"
        strokeWidth="3"
        viewBox="0 0 1000 570"
        className="border border-slate-400/50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.7"
      >
        <path
          d="M374.8 44.8l-0.5 2-1 1.4-0.7 0.4-4.4 0.4-0.6 0.5-0.5 0.8-0.3 1.2-0.3 3.6-0.4 1.7-0.8 1.5-0.9 1.2-1.1 0.8-1.3 0.3-1.2-0.3-7.7-8-1.1-0.5-0.8 0.2-0.5 1.2-1.7 9.6-1.9 1.8-1.1 1.9-0.3 1.2 0 2.4-0.2 1-0.4 0.8-3.3 3.2-0.6 0.8-2.7 7-2.1 1.3-0.7 0.8-0.5 0.9-0.2 1 0.2 1.3 8.3 26.2 10.5 8.7 1.1 5.3-1 0.7-1 1.7-0.3 1.9 0 1.4-0.2 1.9-0.5 1.8-0.5 1-0.9 0.7-1.2 0.7-4.3 3.6-2.2 1.1-1.5-0.3-2-0.9-1.2-0.2-0.5 0.5-0.2 0.9 0.3 0.9 0.9 3 0 0.9-0.1 2.2 0.9 3.2-0.1 1.4-0.8 1.1-1 2.7-1.2 1.7-1.2 0.7-1.1 0.2-2.6-0.2-4.2 0.4-1.1 0.3-1.2 0.8-3.2 2.7-1.9 0.7-4.8-1.8-11.6 2-3-0.4-3.4-1.2-3.7-0.8-6.1 0.2-1.8 0.5-1.2 0.5-0.6 1-0.3 1-0.2 2.3 0.2 1.4-0.4 1.7-0.8 1.3-1.2 0.5-1.2 0.1-2-0.1-1.4 0.5-8.8 5.5-1.8 2.3-0.8 0.9-1.7 1.3-1 0.2-1.1-0.4-1-0.8-1.2-0.5-1.2 0.1-14.1 7.4-2.6 0.7-0.7 0-1.5-0.7-1-0.2-1.6 0-1.2 0.4-1.6 1.1-1.4 1.4-6.3 4.1-8.7 3.6-1.7 1-0.8 1-2 3.1-1.4 3.4-1.4 1.8-1.7 1.2-3.8 3.8-1.5 0.7-2.3 0.6-1.8 1-1.6 2.2-3.1 2.3-2-0.1-6.7-1.6-1.3-0.7-1-1-1.6-2.3-1.3-1.5-1.8-1.6-3.1-2.2-1.1-1.1-0.4-0.7 0.5-1.5 2.2-2.8 1.1-2-0.4-1.9-1-2.5-3.1-4.8-1.1-2.3-0.5-1.9 0.7-2.2 0.1-1.2-0.2-2.4-0.5-3-0.3-2.7 0-1.5 0.3-5-0.1-2-0.2-2-0.8-3.1-0.7-1.5-1-1.1-2.2-1.2-4.2-1.1-4.5-0.2-3.7-0.8-1.8-1.4-1.1-1.4-1-2-0.7-1-0.9-0.7-9.7-1.1-2.5-1.4-4.9-4.2 3.2-3.1 2.1-2.5 0.9-4.3 1-9.4 1.2-0.9 1.2-0.3 1.3 0.3 1.1 0.9 1.3 0.3 1.4 0.2 1.4-0.1 1.4-0.4 4.1-1.5 7.8 0.5 3.6-2.7 2.1-3.9 5-13.2 2.8 0.3 2.4 1.7 2.5 1.1 3.1-1.6 1.5-4.7 0.9-1.5 5.5-4 0.9-0.9 0.1-0.9 0.4-0.2 1.8 0.6 0.8 0.9 2.1 3.5 0.9 1.2 3.3 1.7 2.8-0.7 2.5-2.3 2.5-3.2 1.5-0.8 0.9-1.1 0.1-1.4-0.8-1.9 2.4-1.9 2-2.5 0.6-3.2-1.7-3.5 6-3.7 6.7-1.3 13.3 0.1 2.8-0.6 5.6-2.1 3.2-0.3 6.8 0.8 2.6-0.6 4.3-2.6 0.9-0.1 0.9-0.3 1-1.4 0.1-1.2-0.4-1.7-0.2-2 0.6-2.2 1.4-1.7 1.3-0.1 1.4 0.5 1.9-0.3 1.5-1.1 2.2-2.9 1.6-1.2 2.9-0.6 5.4 0.7 2.8-0.2 23-10.6 1.8-1.7 2.7-4.1 1.6-1.5 5.3-1.2 11.6 1 4.4-3.7 0.8-5.9-3.9-2.2-5.4-1.7-3.8-3.7 0.1-2.5 1.3-0.8 0.2-0.5-2.9-1.2-5-0.7-1.7-1.1 1.6-2.4 2.1-6.7 3.5-3.7 4.7-0.7 5.5 1.8 1.1 1 0.8 1.3 1 1.3 1.6 0.9 1.6 0 4.1-1.8 5.4 0.3 1.7-0.9 1.2-3.2 0.9 2 0.3 1.4 0.5 1.4 1.4 1.9 1.8 1.3 4 1 1.8 1.4 1.8 2.2 1.1 1.8 0.5 2.3-0.3 3.6-1.1 2.8-1.8 3.3-0.8 2.9 1.7 1.3 8.2-3.4 1.7 0.1 0.8 2.6-0.8 3.1-2.5 5.9-0.5 4.2z"
          name="Ústecký"
          onMouseMove={RegionClick}
          fill={GREEN}
        />
        <text
          name="Ústecký"
          x="23%"
          y="24%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>

        <path
          d="M197.2 222.5l1.8 4.6 0 2.2-1 2.4-0.6 1.6 0 1 0.5 0.7 0.8 0.3 1.5 0.1 1.6-0.4 3-1.7 1.6-0.2 2 0.8 2.4 0.6 2.6 1.2 7.1 6.9 1.3 0.9 2.7 0.3 2-0.2 2-0.5 1.2-0.1 1.5 0.1 2.8 0.8 1.6 0.8 1.3 0.8 3.8 4.3 1 0.8 0.9 0.5 4.9 1.5 0.9 0.6 0.6 0.9 0.5 1.9 7.7 4 1.3 1.3 0.7 1.1-0.3 0.8 0 2 0.2 1.2 1.5 4.9 0.1 1.1-0.2 1-1.8 0.8-1.8 0.2-0.7 1.1 0 4-0.3 1.5-1.8 4.7 0.1 1.5 0.5 2.3-0.1 1.1-1.5 5.1-0.2 1.2-0.1 1.3 0.6 0.9 1.4 0.6 1.1 0.6 0.3 0.8 0.1 0.7-0.5 1-3.7 4.1-1.1 1.1-1.1 0.6-4.4 1-1.8 0.8-1.7 1.1-1.7 1.7-0.8 1-0.4 1.1 0.6 1 2.2 2 0.2 0.8-0.2 0.7-1.2 0.7-0.9 0.7 0 0.3 1.9 1.2 0.5 1.2-0.3 0.6-1.3 1.3-0.1 0.8 0.4 1.8 0.5 0.8 0.8 0.5 1.4 0.6 1 0.7 1.3 1.5 0.5 1.2 0.3 1.2-0.1 5.7 0.2 2.3 0.4 1.4 0.5 1 1.4 1.8 1 1.5 0.3 1.6 0 1.3-0.4 2.2-1.1 3.4 0 2.1 2.1 4.7 1.9 7.3 0.2 2-0.2 1.1-1 4.3-0.3 3.5 0.4 2.8 0.8 4 0.2 1.9-0.2 1.5-0.7 1.4-2.8 4.8-1.3 2.9-0.8 2.9-1.1 2.5-0.8 0.6-2.5 1.6-1.3 1.4-0.2 1.6 0.9 2.2 0 1.3-0.2 0.8-0.5 0.9-1.4 2.1-0.1 0.9 0.2 0.8 0.6 0.8 2 2.1 0.7 1.6-0.1 0.9-0.8 0.7-1.2 0.4-1.6 1-1.3 1.3-3.9 7.4-1.4 2-1.2 0.5-1.8-0.3-1.4 0.6-1.5 1.8-1.9 4.9-0.6 3.3 0.1 2.4 0.4 2.4-0.1 2-0.4 1.3-0.7 1.2-3.2 3.2-3.4 5.3-3.2 6.9 0.2 2.1-1-0.2-2 1-1.4 2.4-1.6 4-3.4-1.7-4.7-3.4-4.2-3.9-2.1-3.5-0.1-6.3-1.7-3.9-6.2-6.4-4.5-6.1-1.8-1.5-3-1.2-8.9-0.4-4.2-2.4-2.3-3.8-2-4.5-13.8-18.8-1.8-1-4.8-5.7-0.6-2.1-0.2-2.2-0.9-1.8-2.5-1.1-4.2-4.4-2.1-1.8-2.5-1.3-5.7-1.6-2 0.7 0.7 2.9-2.8 0.4-8.7-1.3-2.9-1.1-2.3-2.4-4.9-10.9-3-3-6.8-3.3-2.8-2.4-1.7-3.2-0.8-3.7-0.6-11.3-1.1-0.9-1.5 0.2-1.7-0.5-1.6-1.7-1.2-1.7-0.9-2-0.9-2.7-0.6-2.7-0.7-5.1-1.1-2.4-1.5-1.7-3.5-2-1.5-1.8 0.8-2.4-1.6-0.9 1.3-2.7-0.2-3.1-1.2-2.4-2-1.1-4.9-2.3-2.3-1.6-2.1-1.9-3.1-4.4-1.5-2.9-0.7-2.4 1.7-3.5 6.1-2.6 2.4-2.4 0.4-3.7 0.1-4.8 0.9-3.2 3 0.9 1.1-3.6 3.4-6.3 1.2-3.5 0.4-4.4 7 1.3 1.4-0.3 1.1-0.6 4-4 0.8-0.4 0.8 0 4.4 1.6 2.5 0.3 2.1-0.4 0.7-0.4 4.5-5.3 1-0.5 11.4 0.2 3.3 3.4 1.1 0.5 0.5-0.2 3.7-2.7 1.6-0.3 4 2 2.4 0.6 0.9-0.3 0.7-0.8 1.9-9.7 0.6-1.2 0.8-0.7 13.7-7.4 3.2-3.5 1.5-1 0.7-0.1 10.2 2 5.2 5.9 2 0.8 1.9-0.1 0.8-0.3 0.6-0.6 0.2-0.9-1.7-6.8-0.1-1.3 0-1.2 0.3-0.9 0.6-0.6 8.6-1.9 0.6-0.6-0.1-0.9-1-2.4-0.4-1.4-0.1-1.4 0.1-1.4 0.6-1.2 0.9-1 1.6-0.7 1.3 1.5 1.6 2.3 1 1 1.3 0.7 6.7 1.6 2 0.1 3.1-2.3z"
          name="Plzeňský"
          onMouseMove={RegionClick}
          fill={GREEN}
        />
        <text
          name="Plzeňský"
          x="13.5%"
          y="58%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M696.7 332.3l-0.6 2.7-0.7 1.7-0.8 0.9-0.9 0.3-4.7-1.2-1.1 0.4-0.4 0.9 0.2 1.3 0.5 1.6 2 3.4 6.3 6.3 0.4 1.3-0.4 0.5-1.7 0.8-0.3 1 0.1 1.2 0.4 1.6 3.6 9.4 0.2 1.3 0 1.2-0.2 1.1-0.5 1.2-0.7 1-0.9 1-0.7 1 0.1 1.1 0.8 1.2 8 6.2 1.2 0 1.4-0.6 1.3-1 2.3-2.7 1.8-2.7 0.4-1.2 0.1-1.4-0.1-1.5-0.4-1.4-1-2.7-2.7-4.5-0.3-1.8 0.2-2.7 0.6-1.4 0.9-0.8 1.3-0.3 1.4 0.1 5.8 2.4 1 0.9 1.8 2.9 1.4 3.4 0.9 5.3 0.5 1.2 0.8 1.2 6.8 6.7 0.9 1.8 0.2 1.2-0.2 4.4 0.4 1.2 0.9 1.1 2.4 1.4 5.5 1.7 3 2.9 2.8 4.2 1.8 4.1 0.2 1.6 0 1.3-0.3 1.5-0.2 0.5-2.4 4.3-0.3 1.5 0.1 1.9 1.3 4.4 2 4.2 1.9 2.7 3.9 2.3 0.6 0.6 0.5 0.9 0.4 1.3 0.1 1.3-0.3 1.1-0.6 0.9-1.9 1.3-4 1.5-0.7 0.7-3.8 5.5-2.3 2-0.2 1 0.3 1.1 0.8 1 1.1 0.9 2.7 1.2 2.6 0 7.2-2.5 1.1 0.1 0.8 0.6 0.4 1.1 0.1 1.5-0.4 7 0.3 1.2 0.6 0.9 0.8 0.7 6.1 2.8 9.1 1.9 0.7 0.5 0.6 0.9 0.7 2.4 0.5 3.2 5.2 2.2 2.7 2.2 1.6 2.4 0.9 0.6 1.1 0.1 1.2-0.2 4.7-2.6 4.3 0.6 3.4 1.4 0.6 0.5 0.9 1.6 0.8 2.1 0.4 2.4 0.5 1 0.9 0.7 8 2.3 1.4 1 1.2 1.4 0.9 1.8 1.4 4 1.1 5.1-16.3 6.4-5.4-0.8-4.5-4.8-2.2-1-3.5 1-5.6 3.7-2.6 0.5-16.8-8.6-7.1-1.9-6.6 1.5-7.9 5.8-1.4 2-0.8 4.3-2.2 2.7-5 4.4-3.7 6.2-7.4 21.6-1.7 3.1-2.4 2.8-0.3 4.3-5.1-6-2.1-14.8-3.5-4.9-2.4-0.2-5.7 2-2.8 0.4-2.7-1-5.4-3.6-2.2-0.8-5.6 0.3-2.4-0.4-1.9-1.4-1.1-2.7-0.5-3.2-1.2-2.7-2.8-1.1-2.7-0.3-8.9-2.6-2.5-1.6-1.3-0.5-1.4 0.2-2.7 1.1-1.5 0.1-4.2-0.6-2.6 1.7-7.5 12.9-1.6 1.5-2.3 0.7-0.9-0.3-1.9-1.6-3.1 0.5-0.1 0.1-20.7-3.1-13.6 0.9-7.8-3.4-14.9-10.9-0.2-1.1 0-1.5-0.8-1-2.5 0.6-0.1-2.3-1.1-1-1.7-0.1-1.9 0.4 1.6-2-1.3 0.1-1.1-0.5-1.6-1.2-2.8-0.2-1-0.4-0.8-1.2-0.6-2.7-0.8-0.7-4.5 0-1.3 0.4-5.3 2.7-2.4 0.8-3.4 0-3.4-0.8-11.4-6.4-8.8-3.5 0.4-2.1 0.6-1.4 0.5-1.8 2.3-5.7 0.7-2.3 0-1 0.4-1 0.7-0.6 0.9-0.2 1 0.1 1 0.6 1.1 0.9 2.8 4.5 0.9 0.4 0.8-0.1 0.8-0.7 1.2-1.7 0.4-1 1.1-1.3 1.5-1.2 0.9-0.4 1.1 0 1 0.4 4.4 3.8 0.9 0.3 0.9-0.1 10.7-9.7 4.1-1.9 5.1 0.5 1-0.5 0.7-1 0.8-3.2 0.5-1 0.8-0.7 0.7-0.3 1.4 0.1 0.6 0.2 3.8-4.8 1.1-0.6 1 0.1 0.8 1 0.6 1.4 0.7 0.9 0.8 0.7 1.8 0.5 4.4-0.2 0.9-0.4 2.6-2 0.7-0.2 10.2 1.7 1.5-0.5 1.2-1 3.1-4.6 0.6-0.5 10.4-3.4 3.2-3.9 1-2.3 0.3-1 0-1.1-0.3-1-1.2-2.9-0.2-2 0.3-1.1 0.6-1.2 2.1-2.5 0.7-1.2 0.3-1.2 0-1.1-0.3-1-0.6-0.8-0.7-0.6-1.9-1-0.6-0.8-0.3-1.1-0.2-1.3 0.2-2.8 0.7-2.8 0.5-1 0.7-0.7 3.2-1.3 0.4-0.5 0.2-0.7-0.4-1.6-1-1.9-0.4-1.9 0.1-1.4 0.3-1.6 0.6-1.4 1.5-2.5 1.9-1.9 12.9-7.9 0.6-1.1 0.1-1.4-0.2-1.6-2.7-8.7-0.3-1.6-0.4-10.4-0.8-3 0-1.1 0.4-0.7 0.7-0.5 4.4-0.8 0.6-0.7 0.4-1.1 0.3-1.3 0.1-1.4-0.2-1.4-0.3-1.3-0.5-1.1-4.1-4-0.3-1 0-1.2 1.8-4.6 0.7-2.6 0.3-2.5 3.6 0.3 17.5-1.7 1.3-1.1 0.5-0.9 0.2-1.5 0.2-1.9 0.8-1 1.3-0.6 7.8 0 1.2 0.3 1.8 0.9 1.4 0.2 4.9-0.4 3.7 0.3 3.5 1.3 7.4 3.7 1.6-0.3z"
          name="Jihomoravský"
          onMouseMove={RegionClick}
          fill={RED}
        />
        <text
          name="Jihomoravský"
          x="65.5%"
          y="82%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M932.5 384.6l-0.3 8-8.9 7.1-19.9 7.7-4.3 4.2-3.6 5.8-2.7 6.8-1.9 7.5-0.5 6 0.2 11.5-1 4.9-3.1 5.2-4.3 4.1-4.9 2.2-7.9-0.6-3.6 0.6-3.1 2-1.9 3.9-1 3.3-1.1 7-1.2 3.1-2.7 2.6-2.8 0.2-3.2-0.5-3.6 0.6-2.4 2-5.1 8.8-2.6 2.1-12 4.8-1.1-5.1-1.4-4-0.9-1.8-1.2-1.4-1.4-1-8-2.3-0.9-0.7-0.5-1-0.4-2.4-0.8-2.1-0.9-1.6-0.6-0.5-3.4-1.4-4.3-0.6-4.7 2.6-1.2 0.2-1.1-0.1-0.9-0.6-1.6-2.4-2.7-2.2-5.2-2.2-0.5-3.2-0.7-2.4-0.6-0.9-0.7-0.5-9.1-1.9-6.1-2.8-0.8-0.7-0.6-0.9-0.3-1.2 0.4-7-0.1-1.5-0.4-1.1-0.8-0.6-1.1-0.1-7.2 2.5-2.6 0-2.7-1.2-1.1-0.9-0.8-1-0.3-1.1 0.2-1 2.3-2 3.8-5.5 0.7-0.7 4-1.5 1.9-1.3 0.6-0.9 0.3-1.1-0.1-1.3-0.4-1.3-0.5-0.9-0.6-0.6-3.9-2.3-1.9-2.7-2-4.2-1.3-4.4-0.1-1.9 0.3-1.5 2.4-4.3 0.2-0.5 0.8 1.5 1 0.9 0.7 0.2 0.7-0.3 0.6-0.7 0.4-1.1 0.7-4.2 0.4-1.2 0.6-0.8 1.1-0.3 9.6-0.2 1.1 0.1 0.6-0.4 2-2.6 5.1-4.9 0.5-0.6 1.3-2.8-1.3-1.6-1.2-3.8 0.2-3.9 0.7-3.7 3.6 0.5 2.3 0.9 3.7 3.1 3.1 1.7 1.3 0.2 6.3 2.9 1.5 0.3 0.9-0.3 0.9-0.8 0.8-1.3 1.3-2.7 1.4-1.4 1.9-1.1 2.6-1.1 1.1-0.3 10.5 0.2 1.1-0.1 0.9-0.4 1.1-1.3 0.3-1 0-1-0.3-1.4-1-2.3-0.2-0.9 0.2-0.7 0.6-0.5 1.8-0.7 1.7-0.2 2.2 0.1 13 2.6 3.9-1.7-0.4-2.5 0-2.2 0.4-2.2 1-1.2 1.9-1.1 1.1-1.4 1-2.8 0.6-1 0.7-0.7 0.7-0.3 0.8 0 0.8 0.3 0.7 0.6 1.4 1.6 0.9 0.4 1.8 0.2 2.1-0.5 2.3-6 6.5 0.1 1.1 1 0.4 0.9 0.6 2.9 0.6 1.1 0.8 0.8 1 0.6 1.3 0.2 23-2.3 1.4 0.6 4.4 3.2 1 0.3 11.2-0.1 2.6 0.9 0.7 0.9 3.1 6.6 1 1.1 2.5 1.6 0.9 1.1 0.7 1.2 0.4 1.5 1.2 6.5 0.5 1.3 0.7 1 0.8 0.6 0.9 0.4 1.6 0z"
          name="Zlínský"
          onMouseMove={RegionClick}
          fill={RED}
        />
        <text
          name="Zlínský"
          x="81%"
          y="76%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M785.1 179.7l2.3 13.7-0.2 1.1-0.4 1.2-0.6 1.1-0.8 1.1-1 0.9-1 0.4-1 0-2.1-1.3-0.9-0.1-0.8 0.3-0.8 0.7-3.4 5-11.9 6.7-2 2.3-0.7 1.4-0.5 1.6-0.3 3.5-0.3 1.2-1.5 2.4-0.4 0.9-0.1 1 1.7 6.8 0 1.1-0.1 1-0.5 1-8.8 12.4-0.6 1.1-0.4 1.3-0.1 1.3 0.1 1.3 0.3 1.2 0.6 1.2 4.1 4 0.4 1.4-0.3 0.7-4.2 5.6-0.4 1.1-0.3 1.3-0.7 8.4 0.1 1 0.4 0.8 0.6 0.8 2 0.8 6.3 0.9 0.7 0.4 0.3 0.6 0.4 2.4 0.4 0.7 0.6 0.6 12.6 6.4 1 0.1 4.2-2.3 1-0.2 1.1 0.4 11.3 12.3 2.2 1.1 7.5 0.4 3.4-2.6 0.8-0.4 0.8 0 5.4 3.7 3.8 0.3 5.4-1.8 4.2 2.1 3.4 2.9 0.7 1 0.2 1-0.8 7.6 0.1 1.5 0.5 1.2 0.8 0.9 1 0.3 1-0.2 2.7-1.8 0.8-0.3 0.9 0.2 0.8 0.9 4.5 9.5 1 1 4.6 2.2 4 3.4 1.6 2.1 0.5 1.2 0.7 2.5 0.3 2.9 4.2 1.1 1.8 1.4 2.3 2.6-2.3 6-2.1 0.5-1.8-0.2-0.9-0.4-1.4-1.6-0.7-0.6-0.8-0.3-0.8 0-0.7 0.3-0.7 0.7-0.6 1-1 2.8-1.1 1.4-1.9 1.1-1 1.2-0.4 2.2 0 2.2 0.4 2.5-3.9 1.7-13-2.6-2.2-0.1-1.7 0.2-1.8 0.7-0.6 0.5-0.2 0.7 0.2 0.9 1 2.3 0.3 1.4 0 1-0.3 1-1.1 1.3-0.9 0.4-1.1 0.1-10.5-0.2-1.1 0.3-2.6 1.1-1.9 1.1-1.4 1.4-1.3 2.7-0.8 1.3-0.9 0.8-0.9 0.3-1.5-0.3-6.3-2.9-1.3-0.2-3.1-1.7-3.7-3.1-2.3-0.9-3.6-0.5-0.7 3.7-0.2 3.9 1.2 3.8 1.3 1.6-1.3 2.8-0.5 0.6-5.1 4.9-2 2.6-0.6 0.4-1.1-0.1-9.6 0.2-1.1 0.3-0.6 0.8-0.4 1.2-0.7 4.2-0.4 1.1-0.6 0.7-0.7 0.3-0.7-0.2-1-0.9-0.8-1.5 0.3-1.5 0-1.3-0.2-1.6-1.8-4.1-2.8-4.2-3-2.9-5.5-1.7-2.4-1.4-0.9-1.1-0.4-1.2 0.2-4.4-0.2-1.2-0.9-1.8-6.8-6.7-0.8-1.2-0.5-1.2-0.9-5.3-1.4-3.4-1.8-2.9-1-0.9-5.8-2.4-1.4-0.1-1.3 0.3-0.9 0.8-0.6 1.4-0.2 2.7 0.3 1.8 2.7 4.5 1 2.7 0.4 1.4 0.1 1.5-0.1 1.4-0.4 1.2-1.8 2.7-2.3 2.7-1.3 1-1.4 0.6-1.2 0-8-6.2-0.8-1.2-0.1-1.1 0.7-1 0.9-1 0.7-1 0.5-1.2 0.2-1.1 0-1.2-0.2-1.3-3.6-9.4-0.4-1.6-0.1-1.2 0.3-1 1.7-0.8 0.4-0.5-0.4-1.3-6.3-6.3-2-3.4-0.5-1.6-0.2-1.3 0.4-0.9 1.1-0.4 4.7 1.2 0.9-0.3 0.8-0.9 0.7-1.7 0.6-2.7 1.4-1.6 0.9-3.4 0.4-4.6 0.4-1.6 4.5-4.8-1.1-7.7-1.4-2.2-2.4-0.9-0.8-0.8-0.5-1.3-0.4-3.9-6.1-12.4-2.4-3.6-0.8-1.7-0.3-1.9 0.2-1.8 2.4-5.1-0.2-5.5 0.1-6.2-0.1-1.4-1.1-4.4-0.6-5.1-0.7-2.2-1-1.8-0.1-1.1 0.5-1.2 3.9-2.3 3.1-3.2 4.5-3.3 0.7-0.6 0.6-1.8-0.3-2.3-0.9-2.5 0.2-2.4 3.7-12.5 5.6-14.3 1.6-0.4 1.4-1.3 2.5-3.4 1.7-1.2 1.3-0.1 2.8 1 1.3-0.1 0.4-0.8-0.1-2.8 0.4-0.7 2.2 0.1 0.9 0.6 0.7 1.4 1.5 2.3 1.8 0.7 1-2-0.3-3-1.9-2.5-0.3-5.7-1.5-4.1-2.7-3-3.6-2.1-2.8-2.8-1.4-4.5-1.1-4.9-1.7-4.3-4.7-7 0-3.2 4-2.5 3.4 0.5 6.3 3.8 3.4-0.4 15.2 4.3 1.6 0.9 3.4 2.9 1.9 1 2.1 0.1 4.5-1 1.7 0.6-0.3 0.6 0.5 2.5 0.9 3 0.9 2 1.4 1.6 5.2 3.3 3.5 1 6.9-0.2 3.1 1.3-2.7 1.1 0.9 1.7 1.3 1.2-0.2 3 0.3 3 1 2.3 2 1.5 1.6-4.2 3.3-0.3z"
          name="Olomoucký"
          onMouseMove={RegionClick}
          fill={RED}
        />
        <text
          name="Olomoucký"
          x="74.5%"
          y="60.5%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M696.7 332.3l-1.6 0.3-7.4-3.7-3.5-1.3-3.7-0.3-4.9 0.4-1.4-0.2-1.8-0.9-1.2-0.3-7.8 0-1.3 0.6-0.8 1-0.2 1.9-0.2 1.5-0.5 0.9-1.3 1.1-17.5 1.7-3.6-0.3-2.8-0.9-6.1-3.9-5.2-1.9-1.6-1.2-1-1.5-0.9-1.7-1.4-1.6-1.9-1.6-5.5-3.7-4.4-2.2-3-0.9-3.8-0.2-3.2 0.3-1.6-0.4-1.1-0.7-0.9-2.2-1-1.1-1.7-0.9-3.4-0.7-2.2-0.8-2-1-2-1.4-1-0.4-0.9-0.1-1 1.2-0.7 1.8-0.5 0.9-0.7 0.6-1.7 0.6-0.7 0.4-2.2 2.5-1.5 1-1.4 0-1.6-0.5-2-0.9-1.3 0.2-1 0.5-3.8-1-2.3-4.7-2-2.8-2.4-1.9-3.8-1.9-0.6-0.5-0.4-0.8-0.3-2.3-0.5-1.1-0.8-0.8-2.1-1.3-3.9-1-6.7-5.3-2.6-0.7-11.3 0.9-0.8-0.4-1.6-1.8-3.8-6.2-2.8-3.3-6.4-4.3 0.2-1.8 0.6-2.4 0.7-2.2 0.5-2.6 0.1-4.6 0.1-0.9 0.9-2.7-0.2-1.1-1.4-1.7-1.1-0.9-1-0.5-2-0.5-1.1-0.9-5.4-5.2-1.1-0.7-5-1.6-3.4-2.3-1.1-1.1-1.7-2.7 0.7-1.1 2.7-1.3 3-0.8 1.4 0.1 0.3-3.2 0-0.8-0.8-3.8 0-1.2 0.6-1.4 2.4-2.4 8.1 3.1 1.2-0.1 8.9-8.5 2.9-1.4 2.2-0.2 5.8 2.9 2.2 0 4.5-1.3 0.8 0.2 6 4.1 1.1 0.3 0.9-0.3 0.8-0.9 1.9-6.3 0.7-1.4 0.9-1.2 7.4-2.1 0.7 0.3 0.6 0.8 1.4 5.9 1 2.4 1.2 1.4 0.6 0.2 0.8-0.4 9.4-9.3 1.4-0.6 6.2-0.2 4.1 1.3 0.8 0.6 0.4 0.9 0.2 1.2 0 4.7 0.3 1.4 0.7 1.3 1.2 0.8 8.5 1.7 0.8 0.7 1.1 2.3 1.5 2.2 1.8 1.6 1.6 0.9 1.3 0.3 0.6 0.5 2.3 3 0.7 0.5 1.7 0.4 5.7 4.9 2.2-1.6 2.3-0.9 13.2-1.3 2-1 0.9-0.9 0.7-1 0.6-1.3 0.6-2.9 0.7-1 0.8-0.7 15.3-7.3 0.8-1.1 0.4-1.4 0.2-3.1 0.3-1.4 0.4-1.1 0.6-0.8 0.8-0.4 15.6 5 5.1 4.7 6.2 3.3 6-0.5 4.5-6.2 3.3-2.4 1.8-2.5 1.6-3.2 2.7-4 3.3-2.8 2.9-0.5 3 0.2 1.8-0.4-5.6 14.3-3.7 12.5-0.2 2.4 0.9 2.5 0.3 2.3-0.6 1.8-0.7 0.6-4.5 3.3-3.1 3.2-3.9 2.3-0.5 1.2 0.1 1.1 1 1.8 0.7 2.2 0.6 5.1 1.1 4.4 0.1 1.4-0.1 6.2 0.2 5.5-2.4 5.1-0.2 1.8 0.3 1.9 0.8 1.7 2.4 3.6 6.1 12.4 0.4 3.9 0.5 1.3 0.8 0.8 2.4 0.9 1.4 2.2 1.1 7.7-4.5 4.8-0.4 1.6-0.4 4.6-0.9 3.4-1.4 1.6z"
          name="Pardubický"
          onMouseMove={RegionClick}
          fill={RED}
        />
        <text
          name="Pardubický"
          x="58.5%"
          y="49.5%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M131.6 148.1l4.9 4.2 2.5 1.4 9.7 1.1 0.9 0.7 0.7 1 1 2 1.1 1.4 1.8 1.4 3.7 0.8 4.5 0.2 4.2 1.1 2.2 1.2 1 1.1 0.7 1.5 0.8 3.1 0.2 2 0.1 2-0.3 5 0 1.5 0.3 2.7 0.5 3 0.2 2.4-0.1 1.2-0.7 2.2 0.5 1.9 1.1 2.3 3.1 4.8 1 2.5 0.4 1.9-1.1 2-2.2 2.8-0.5 1.5 0.4 0.7 1.1 1.1 3.1 2.2 1.8 1.6-1.6 0.7-0.9 1-0.6 1.2-0.1 1.4 0.1 1.4 0.4 1.4 1 2.4 0.1 0.9-0.6 0.6-8.6 1.9-0.6 0.6-0.3 0.9 0 1.2 0.1 1.3 1.7 6.8-0.2 0.9-0.6 0.6-0.8 0.3-1.9 0.1-2-0.8-5.2-5.9-10.2-2-0.7 0.1-1.5 1-3.2 3.5-13.7 7.4-0.8 0.7-0.6 1.2-1.9 9.7-0.7 0.8-0.9 0.3-2.4-0.6-4-2-1.6 0.3-3.7 2.7-0.5 0.2-1.1-0.5-3.3-3.4-11.4-0.2-1 0.5-4.5 5.3-0.7 0.4-2.1 0.4-2.5-0.3-4.4-1.6-0.8 0-0.8 0.4-4 4-1.1 0.6-1.4 0.3-7-1.3-0.9-1.7-2.1-0.8-6-3.6 0.1-2.5 1-3.1-0.3-3.3-2.5-2.4-5.5-0.6-2.2-2.2-0.2 0-22.3-12-0.5-1.4 0-2.1-0.3-2.4-1.3-2.3-2.2-1.8-2.3-1.4-2.1-1.9-1.3-3.5-0.1-3.4 1.1-5.3-0.5-3.4-1.1-2.8-1.7-2.6-3.6-3.9-7.3-4.6-1.5-2.7 1.8-2.8 1.6-1 1-1.1 0.2-3-0.5-3.3-1.2-2-3.4-3.6 10.8 0.8 2.8 2 0.9 2.2 0 3.9 0.5 1.8 1.7 1.5 2.1 0.7 4.3 0.1 1 0.6 0.5 0.8-0.1 1.1-0.6 1.3-1.2 0.8-0.2 0.5 0.6 1 2.6 2.6 0.6 0.9 0.6 1.5 0.4 2.5 1.8 6.4 1.5 2.3 2.5 0.3 2.1-1.5 0-2-0.9-2.5-0.4-2.8 0.4-4.1 0.8-2.2 2.9-3.7 0.4-3.7 1.2-1.8 1.7-1.2 1.7-1.7 4.5-8.4 1.6-1.6 4.4-2.4 1.7-1.6 0.5-0.3 1.4 0.1 0.6-0.4 0.3-0.8-0.3-2.2 0.7-2.2 0.5-1.1 5.2-4.5 5.9-1.8 11.1-0.8 7.9 1.4 1.9-0.2 1.6-1.6 3.3-5.1 1.9-1.8 2.4-0.9 2.4-0.2 2.6 0.4 0.9-0.3 2.1-1.4 1.3-0.3 1.2 0.4 13.7 8.3 5.1 0.3 1.2-1.2z"
          name="Karlovarský"
          onMouseMove={RegionClick}
          fill={GREEN}
        />
        <text
          name="Karlovarský"
          x="7.5%"
          y="37%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M638 334.7l-0.3 2.5-0.7 2.6-1.8 4.6 0 1.2 0.3 1 4.1 4 0.5 1.1 0.3 1.3 0.2 1.4-0.1 1.4-0.3 1.3-0.4 1.1-0.6 0.7-4.4 0.8-0.7 0.5-0.4 0.7 0 1.1 0.8 3 0.4 10.4 0.3 1.6 2.7 8.7 0.2 1.6-0.1 1.4-0.6 1.1-12.9 7.9-1.9 1.9-1.5 2.5-0.6 1.4-0.3 1.6-0.1 1.4 0.4 1.9 1 1.9 0.4 1.6-0.2 0.7-0.4 0.5-3.2 1.3-0.7 0.7-0.5 1-0.7 2.8-0.2 2.8 0.2 1.3 0.3 1.1 0.6 0.8 1.9 1 0.7 0.6 0.6 0.8 0.3 1 0 1.1-0.3 1.2-0.7 1.2-2.1 2.5-0.6 1.2-0.3 1.1 0.2 2 1.2 2.9 0.3 1 0 1.1-0.3 1-1 2.3-3.2 3.9-10.4 3.4-0.6 0.5-3.1 4.6-1.2 1-1.5 0.5-10.2-1.7-0.7 0.2-2.6 2-0.9 0.4-4.4 0.2-1.8-0.5-0.8-0.7-0.7-0.9-0.6-1.4-0.8-1-1-0.1-1.1 0.6-3.8 4.8-0.6-0.2-1.4-0.1-0.7 0.3-0.8 0.7-0.5 1-0.8 3.2-0.7 1-1 0.5-5.1-0.5-4.1 1.9-10.7 9.7-0.9 0.1-0.9-0.3-4.4-3.8-1-0.4-1.1 0-0.9 0.4-1.5 1.2-1.1 1.3-0.4 1-1.2 1.7-0.8 0.7-0.8 0.1-0.9-0.4-2.8-4.5-1.1-0.9-1-0.6-1-0.1-0.9 0.2-0.7 0.6-0.4 1-0.1-0.8-0.8-1.1-1.3-1.1-1.8-0.4-2.3-0.2-1-0.2-0.9-0.6-1.2-2.6-0.5-0.5-1.2-0.3-0.4-1.5 0.6-2.7 0.7-0.9 4.8-5.7 0.7-1.5 0.3-1.1 0.3-2.6 0.8-1.3 0.8-0.1 3.2-0.2 1-0.3 1.4-0.9 0.4-0.5-0.3-1.4-0.9-1.2-7-7-0.6-0.4-1.1 0.1-5.7 2.3-2.1 0.2-7-1.3-3.1 0.5-1.3-0.5-7-6.6-0.7-1-0.5-1.5-0.3-2.1-0.3-3.6-0.6-1.9-0.9-1.2-1.2-0.5-7.2-0.9-1.7-0.4-0.6-0.4-7.8-4.1-0.9-0.1-0.8 0.3-0.7 0.5-2.6 4-0.7 0.4-0.6 0-5.9-3.8-3.9-5.2-4.3-2.9-3.3-3.2-2.3-1.4-1.3-0.1-1.3 0.4-2.5 2.4-1.4 0.4-1.3-0.2-2.8-1.7-5.5-5.2-0.8-1.1-0.4-1.2-0.2-1.1 0.3-4.7 0-1.1-0.7-1.3-2.5-2.4-0.6-1.1-0.4-1.4 0-1.6 3.1-12.3 0.2-4.2-0.4-3.7-2.2-8 0.3-0.9 0.9-0.5 5.2-1.6 1-0.7 0.6-1 0-1.1-0.4-1.1-0.6-1-2.1-2.3 1.2-0.5 1.7-1.5 0.6-1.1 0.7-1.8 0.9-1.4 2.8-1.5 0.6-1.1-0.5-1.8 0.1-0.6 0.7-1 0.7-0.1 1.2 0.1 5.8 2.5 1.6 0.1 2-0.2 3.5-1.1 4.3 0.1 2.5 1.1 4.2-0.7 11.5-5.6 0.4-2.7-0.4-2.5-0.7-2-0.8-1.3-0.8-0.9-6.7-5-0.7-0.9-0.2-1 0.4-1.7 0.7-1.2 3.4-3.9 1.2-1.8 0.4-0.9 0.4-1.9 0.8-1.8 1.2-1.3 1.2-0.4 0.8 0.1 1.9 1.2 0.8 0.2 1.2-0.2 6-3.6 5.2-2 5.2-4.7 0.9-0.5 3.8 0.6 2-0.4 1.2-0.6 0.9-0.8 0.5-0.8 0.4-1 0.6-3.7 0.5-1.8 1.2-2.2 1.6-1.5 1.5-0.5 0.6-0.6 0.2-1.2-0.1-2.4 0.2-1.9 6.4 4.3 2.8 3.3 3.8 6.2 1.6 1.8 0.8 0.4 11.3-0.9 2.6 0.7 6.7 5.3 3.9 1 2.1 1.3 0.8 0.8 0.5 1.1 0.3 2.3 0.4 0.8 0.6 0.5 3.8 1.9 2.4 1.9 2 2.8 2.3 4.7 3.8 1 1-0.5 1.3-0.2 2 0.9 1.6 0.5 1.4 0 1.5-1 2.2-2.5 0.7-0.4 1.7-0.6 0.7-0.6 0.5-0.9 0.7-1.8 1-1.2 0.9 0.1 1 0.4 2 1.4 2 1 2.2 0.8 3.4 0.7 1.7 0.9 1 1.1 0.9 2.2 1.1 0.7 1.6 0.4 3.2-0.3 3.8 0.2 3 0.9 4.4 2.2 5.5 3.7 1.9 1.6 1.4 1.6 0.9 1.7 1 1.5 1.6 1.2 5.2 1.9 6.1 3.9 2.8 0.9z"
          name="Vysočina"
          onMouseMove={RegionClick}
          fill={BLUE}
        />
        <text
          name="Vysočina"
          x="51%"
          y="67%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M451.9 123.7l0.3 0.9-0.1 0.9-1 1.6-0.5 1.2-0.1 1.9 0.4 1.4 1 1.8 0.8 2.1 1.3 9.3 0.1 2.3-0.2 1.9-0.5 1.3-1.3 2.3-1.2 1.8-0.9 3-0.2 3.4 0.2 1.5 0.3 0.9 0.4 0.2 7.3 3.2 0.9 0.6 0.9 0.9 1.3 2 0.6 1.9 0.4 2.6 0.5 1.2 0.8 0.9 0.8 0.4 2.1 0 2.8-0.6 1.3 0.1 4 0.9 6.1-0.7 1.1 0 0.9 0.5 1.3 1.1 0.6 1.3 0.5 1.3 0.5 4 0 3.1 0.4 1.9 0.6 2.4 2.3 6.6 0.3 1.3-0.5 1.5-0.6 1-2.4 2.5-0.2 0.7-0.1 1.1 0.8 1.3 2.4 1.6 1.1 1.2 1.4 1.7 1.9 2.9 0.6 1.4 0.1 1-0.4 0.6-2.4 2.4-0.6 1.4 0 1.2 0.8 3.8 0 0.8-0.3 3.2-1.4-0.1-3 0.8-2.7 1.3-0.7 1.1 1.7 2.7 1.1 1.1 3.4 2.3 5 1.6 1.1 0.7 5.4 5.2 1.1 0.9 2 0.5 1 0.5 1.1 0.9 1.4 1.7 0.2 1.1-0.9 2.7-0.1 0.9-0.1 4.6-0.5 2.6-0.7 2.2-0.6 2.4-0.2 1.8-0.2 1.9 0.1 2.4-0.2 1.2-0.6 0.6-1.5 0.5-1.6 1.5-1.2 2.2-0.5 1.8-0.6 3.7-0.4 1-0.5 0.8-0.9 0.8-1.2 0.6-2 0.4-3.8-0.6-0.9 0.5-5.2 4.7-5.2 2-6 3.6-1.2 0.2-0.8-0.2-1.9-1.2-0.8-0.1-1.2 0.4-1.2 1.3-0.8 1.8-0.4 1.9-0.4 0.9-1.2 1.8-3.4 3.9-0.7 1.2-0.4 1.7 0.2 1 0.7 0.9 6.7 5 0.8 0.9 0.8 1.3 0.7 2 0.4 2.5-0.4 2.7-11.5 5.6-4.2 0.7-2.5-1.1-4.3-0.1-3.5 1.1-2 0.2-1.6-0.1-5.8-2.5-1.2-0.1-0.7 0.1-0.7 1-0.1 0.6 0.5 1.8-0.6 1.1-2.8 1.5-0.9 1.4-0.7 1.8-0.6 1.1-1.7 1.5-1.2 0.5-1 0.2-1.3-0.7-1.5-1.5-0.6-0.9-1.3-3.2-0.9-0.6-1.8-0.7-2.9 0.6-1.5-0.2-0.7-0.5-0.2-2-0.5-0.9-0.8-0.7-4.3-1.3-1.3-1-1.1-1.4-0.8-0.9-1.2 0.1-1.9 1.6-1 1.5-0.9 1.8-0.3 1.4-0.3 6-1 1.4-2 1.6-4.8 1-1 0.5-2.2 2.2-3.5 2.3-1.6 0.4-1.6 0.2-3.5-0.5-0.3-0.9 0.2-1.3-1.9-0.5-16.4 0.7-2.7-0.4-2.5-1.3-1.9-0.5-1.9 0.1-1.2 0.2-6.9 3.9-1.5 0.2-1.1-0.1-1.1-0.5-0.7-0.6-1-1.5-1.2-1.1-1.7-0.6-0.6-0.9-0.5-1.5-1.3-0.9-1.8-0.5-2.3 0-1.8 0.4-1.3 0.6-2.7 2.7-2.9 1.2-8.6 1.1-3.9-0.1-1.9-0.7-2.8-0.2-0.9-0.3-1.8-1.4-1.5-0.8-1.1-0.2-1 0.2-1.7 0.9-0.9 0.8-0.8 1.6-0.8 2.6-0.8 0.8-7.1 2.2-1.9 1.2-2.7 1.4-1.5 0.2-1.3-0.2-2.6-1.5-0.9-0.6-1.8-0.6-3.1-0.1-0.8-0.3-1.7-1.2-1.5 0-8.6 5 0-2.1 1.1-3.4 0.4-2.2 0-1.3-0.3-1.6-1-1.5-1.4-1.8-0.5-1-0.4-1.4-0.2-2.3 0.1-5.7-0.3-1.2-0.5-1.2-1.3-1.5-1-0.7-1.4-0.6-0.8-0.5-0.5-0.8-0.4-1.8 0.1-0.8 1.3-1.3 0.3-0.6-0.5-1.2-1.9-1.2 0-0.3 0.9-0.7 1.2-0.7 0.2-0.7-0.2-0.8-2.2-2-0.6-1 0.4-1.1 0.8-1 1.7-1.7 1.7-1.1 1.8-0.8 4.4-1 1.1-0.6 1.1-1.1 3.7-4.1 0.5-1-0.1-0.7-0.3-0.8-1.1-0.6-1.4-0.6-0.6-0.9 0.1-1.3 0.2-1.2 1.5-5.1 0.1-1.1-0.5-2.3-0.1-1.5 1.8-4.7 0.3-1.5 0-4 0.7-1.1 1.8-0.2 1.8-0.8 0.2-1-0.1-1.1-1.5-4.9-0.2-1.2 0-2 0.3-0.8-0.7-1.1-1.3-1.3-7.7-4-0.5-1.9-0.6-0.9-0.9-0.6-4.9-1.5-0.9-0.5-1-0.8-3.8-4.3-1.3-0.8-1.6-0.8-2.8-0.8-1.5-0.1-1.2 0.1-2 0.5-2 0.2-2.7-0.3-1.3-0.9-7.1-6.9-2.6-1.2-2.4-0.6-2-0.8-1.6 0.2-3 1.7-1.6 0.4-1.5-0.1-0.8-0.3-0.5-0.7 0-1 0.6-1.6 1-2.4 0-2.2-1.8-4.6 1.6-2.2 1.8-1 2.3-0.6 1.5-0.7 3.8-3.8 1.7-1.2 1.4-1.8 1.4-3.4 2-3.1 0.8-1 1.7-1 8.7-3.6 6.3-4.1 1.4-1.4 1.6-1.1 1.2-0.4 1.6 0 1 0.2 1.5 0.7 0.7 0 2.6-0.7 14.1-7.4 1.2-0.1 1.2 0.5 1 0.8 1.1 0.4 1-0.2 1.7-1.3 0.8-0.9 1.8-2.3 8.8-5.5 1.4-0.5 2 0.1 1.2-0.1 1.2-0.5 0.8-1.3 0.4-1.7-0.2-1.4 0.2-2.3 0.3-1 0.6-1 1.2-0.5 1.8-0.5 6.1-0.2 3.7 0.8 3.4 1.2 3 0.4 11.6-2 4.8 1.8 1.9-0.7 3.2-2.7 1.2-0.8 1.1-0.3 4.2-0.4 2.6 0.2 1.1-0.2 1.2-0.7 1.2-1.7 1-2.7 0.8-1.1 0.1-1.4-0.9-3.2 0.1-2.2 0-0.9-0.9-3-0.3-0.9 0.2-0.9 0.5-0.5 1.2 0.2 2 0.9 1.5 0.3 2.2-1.1 4.3-3.6 1.2-0.7 0.9-0.7 0.5-1 0.5-1.8 0.2-1.9 0-1.4 0.3-1.9 1-1.7 1-0.7 1.6-0.5 6.6-0.1 2.8 0.4 2.3-0.1 1 0.1 0.7 0.4 0.5 1.2 0.5 2.6 0.7 0.9 1.3 0.2 2.6-0.3 13.2-3.4 6-4 5.4-2.6 1.3-1 1.8-1.7 1.1-0.8 2.4-1.3 1.3-1.1 1-1.4 1.6-3.1 1.5-1.9 3.1-2.6 0.8-1.1 1.7-2.8 0.6-0.7 0.7-0.3 0.8 0.1 1.5 0.6 1.2 0 1.7-0.8 1-0.2 1.1 0.1 1.4 1.2 1.2 0.6 3.5-0.3 0.8 0.2 0.8 0.6 2.8 3.3 0.9 0.9 2.1 0.6 3.8-1 1.3 6.8 1.5 2.9 5.3 4.7z m-73.2 92l-1-1.4-1.1-0.8-3.5-0.9-1.1-0.5-0.6-1-0.5-1.5-0.7-0.8-1.8-1.4-2.3-2.4-1.7-1-1.6-0.3-7.3 0.8-19.5 5.7-0.6 0.5-0.4 1.3 0.4 2.5-0.8 1.2-0.8 0.5-0.9 0.2-0.7-0.1-3.7-1.6-1.7 0-7 2.6-2.8 1.7-0.5 0.7-0.1 0.7 0.7 0.9 2.7 1.7 1.3 1.2 0.1 1-0.9 2.6 0.1 1.1 0.5 0.7 3.6 4.6 1.1 2.1 0.8 2.8 1 1.9 4 4.6 0.5 1.7-0.3 3.8 0.2 1.4 0.8 0.9 2.1 0.5 6.2-2.6 10.6-1.9 6.6-2.1 0.9-0.5 2.2-2 2.4-1.8 1.4-0.4 1.4-0.1 0.7 0.4 2.1 0.5 2.6 0.3 5.3-0.3 3.3-0.8 1.1-2.2 0-1.1-0.9-2.2-0.1-0.6 0.2-2.1-0.3-1.3-0.8-1.9 0.2-0.8 0.4-0.7 4.2-4 1.2-1.7 0.4-1.5-0.2-1.2-0.6-1.1-0.9-0.7-3.1-1-1-0.6-1-1.2-0.5-1z"
          name="Středočeský"
          onMouseMove={RegionClick}
          fill={BLUE}
        />
        <text
          name="Středočeský"
          x="37%"
          y="53.5%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M509.6 61.3l2.1 6.8 4.9 9.9 0.4 1.9-0.3 1.3-0.5 1.3-0.4 1.7-0.2 2.1 0.2 4.6 0.4 2.1 0.7 1.7 1.8 2.4 0.7 1.2 0.5 1.3 0.2 1.3 0 2.9-1.1 4.9 0.3 1.8 5 11.7 0.3 1.4 0.1 1.4-0.2 1.5-0.6 1.3-0.8 0.7-1.1 0.2-11.3-2-1.7-1.1-3.1-3.3-0.8-0.5-1.7 0-3.8 1.3-0.9 0.6-0.4 1.3-0.5 7.4-0.4 1.6-0.6 1.2-0.9 0.8-1 0.3-1-0.1-1.1-0.5-2.2-1.9-4.5-5.8-2.8-2.3-6.4-2.6-1.6 0-1.5 0.6-6.3 7.2-0.9 0.4-0.9-0.1-1-0.5-8.2-6.9-2.3-0.9-1.5 0.2-0.8 0.6-5.3-4.7-1.5-2.9-1.3-6.8-3.8 1-2.1-0.6-0.9-0.9-2.8-3.3-0.8-0.6-0.8-0.2-3.5 0.3-1.2-0.6-1.4-1.2-1.1-0.1-1 0.2-1.7 0.8-1.2 0-1.5-0.6-0.8-0.1-0.7 0.3-0.6 0.7-1.7 2.8-0.8 1.1-3.1 2.6-1.5 1.9-1.6 3.1-1 1.4-1.3 1.1-2.4 1.3-1.1 0.8-1.8 1.7-1.3 1-5.4 2.6-6 4-13.2 3.4-2.6 0.3-1.3-0.2-0.7-0.9-0.5-2.6-0.5-1.2-0.7-0.4-1-0.1-2.3 0.1-2.8-0.4-6.6 0.1-1.6 0.5-1.1-5.3-10.5-8.7-8.3-26.2-0.2-1.3 0.2-1 0.5-0.9 0.7-0.8 2.1-1.3 2.7-7 0.6-0.8 3.3-3.2 0.4-0.8 0.2-1 0-2.4 0.3-1.2 1.1-1.9 1.9-1.8 1.7-9.6 0.5-1.2 0.8-0.2 1.1 0.5 7.7 8 1.2 0.3 1.3-0.3 1.1-0.8 0.9-1.2 0.8-1.5 0.4-1.7 0.3-3.6 0.3-1.2 0.5-0.8 0.6-0.5 4.4-0.4 0.7-0.4 1-1.4 0.5-2 0.7 1.8 5.1 1.4 2.1 1.2 5.7 4.3 5.4 1.2 3.2 0.1 2.4-0.6 1.5-1.7 1.4-2.7 2.3-6.2 3.1 0.1 5.4-1.5 16.8 1.2 0.3-2-0.1-8.1-0.3-1.6 0.1-1.3 0.4-0.8 1.5-1.6 0.4-1.2-0.1-6.8-2.3-3.3-2.4-1.9-0.6-2.7 1.5-1.4 1.6-0.6 2.2-1.5 0.7-1.1 0.4-2 2.8 2.6 7.4 1.7 1.3 2.3 1.7 1.7 2.1 1 1.7-0.3 0.5-2.4 1.3-3.1 1.9-1.3 1.7 0.9 0.7 3.5 1.4 3.5 8.4 0.1 3.9 2 2.4 3.8-0.2 2.3-1.2 2.4-1.1 4.3 0.5 3.4 1.3 4.1 1.8 3.9 1.6 2.5 2.9 2.4 2.7 1.1 2.2 1.9 1.8 4.4 0 2.3-0.4 2.3-0.1 2.2 0.9 2 2.1 0.6 1.7-1.7 1.4-2.5 1.3-1.7 6.2-0.5 11.8 4.1z"
          name="Liberecký"
          onMouseMove={RegionClick}
          fill={GREEN}
        />
        <text
          name="Liberecký"
          x="41%"
          y="15%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
        <path
          d="M378.7 215.7l0.5 1 1 1.2 1 0.6 3.1 1 0.9 0.7 0.6 1.1 0.2 1.2-0.4 1.5-1.2 1.7-4.2 4-0.4 0.7-0.2 0.8 0.8 1.9 0.3 1.3-0.2 2.1 0.1 0.6 0.9 2.2 0 1.1-1.1 2.2-3.3 0.8-5.3 0.3-2.6-0.3-2.1-0.5-0.7-0.4-1.4 0.1-1.4 0.4-2.4 1.8-2.2 2-0.9 0.5-6.6 2.1-10.6 1.9-6.2 2.6-2.1-0.5-0.8-0.9-0.2-1.4 0.3-3.8-0.5-1.7-4-4.6-1-1.9-0.8-2.8-1.1-2.1-3.6-4.6-0.5-0.7-0.1-1.1 0.9-2.6-0.1-1-1.3-1.2-2.7-1.7-0.7-0.9 0.1-0.7 0.5-0.7 2.8-1.7 7-2.6 1.7 0 3.7 1.6 0.7 0.1 0.9-0.2 0.8-0.5 0.8-1.2-0.4-2.5 0.4-1.3 0.6-0.5 19.5-5.7 7.3-0.8 1.6 0.3 1.7 1 2.3 2.4 1.8 1.4 0.7 0.8 0.5 1.5 0.6 1 1.1 0.5 3.5 0.9 1.1 0.8 1 1.4z"
          name="Praha"
          onMouseMove={RegionClick}
          fill={BLUE}
          style={{ transform: "scale(1.4) translate(-10%, -11.3%)" }}
          strokeWidth="2"
        />
        <text
          name="Praha"
          x="33%"
          y="42%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          400
        </text>
        <path
          d="M666.4 213.2l-15.6-5-0.8 0.4-0.6 0.8-0.4 1.1-0.3 1.4-0.2 3.1-0.4 1.4-0.8 1.1-15.3 7.3-0.8 0.7-0.7 1-0.6 2.9-0.6 1.3-0.7 1-0.9 0.9-2 1-13.2 1.3-2.3 0.9-2.2 1.6-5.7-4.9-1.7-0.4-0.7-0.5-2.3-3-0.6-0.5-1.3-0.3-1.6-0.9-1.8-1.6-1.5-2.2-1.1-2.3-0.8-0.7-8.5-1.7-1.2-0.8-0.7-1.3-0.3-1.4 0-4.7-0.2-1.2-0.4-0.9-0.8-0.6-4.1-1.3-6.2 0.2-1.4 0.6-9.4 9.3-0.8 0.4-0.6-0.2-1.2-1.4-1-2.4-1.4-5.9-0.6-0.8-0.7-0.3-7.4 2.1-0.9 1.2-0.7 1.4-1.9 6.3-0.8 0.9-0.9 0.3-1.1-0.3-6-4.1-0.8-0.2-4.5 1.3-2.2 0-5.8-2.9-2.2 0.2-2.9 1.4-8.9 8.5-1.2 0.1-8.1-3.1 0.4-0.6-0.1-1-0.6-1.4-1.9-2.9-1.4-1.7-1.1-1.2-2.4-1.6-0.8-1.3 0.1-1.1 0.2-0.7 2.4-2.5 0.6-1 0.5-1.5-0.3-1.3-2.3-6.6-0.6-2.4-0.4-1.9 0-3.1-0.5-4-0.5-1.3-0.6-1.3-1.3-1.1-0.9-0.5-1.1 0-6.1 0.7-4-0.9-1.3-0.1-2.8 0.6-2.1 0-0.8-0.4-0.8-0.9-0.5-1.2-0.4-2.6-0.6-1.9-1.3-2-0.9-0.9-0.9-0.6-7.3-3.2-0.4-0.2-0.3-0.9-0.2-1.5 0.2-3.4 0.9-3 1.2-1.8 1.3-2.3 0.5-1.3 0.2-1.9-0.1-2.3-1.3-9.3-0.8-2.1-1-1.8-0.4-1.4 0.1-1.9 0.5-1.2 1-1.6 0.1-0.9-0.3-0.9 0.8-0.6 1.5-0.2 2.3 0.9 8.2 6.9 1 0.5 0.9 0.1 0.9-0.4 6.3-7.2 1.5-0.6 1.6 0 6.4 2.6 2.8 2.3 4.5 5.8 2.2 1.9 1.1 0.5 1 0.1 1-0.3 0.9-0.8 0.6-1.2 0.4-1.6 0.5-7.4 0.4-1.3 0.9-0.6 3.8-1.3 1.7 0 0.8 0.5 3.1 3.3 1.7 1.1 11.3 2 1.1-0.2 0.8-0.7 0.6-1.3 0.2-1.5-0.1-1.4-0.3-1.4-5-11.7-0.3-1.8 1.1-4.9 0-2.9-0.2-1.3-0.5-1.3-0.7-1.2-1.8-2.4-0.7-1.7-0.4-2.1-0.2-4.6 0.2-2.1 0.4-1.7 0.5-1.3 0.3-1.3-0.4-1.9-4.9-9.9-2.1-6.8 17.7 6.3 1.7 1.1 1.9 3 1.1 1 1.6 0.5 12.3-2.9 3.6 0.3 0.3 1.6 0.5 1.4 7.5 12.8 0.9 0.3 4.1-0.1 8.7-3.3 2.5 0.3 2 1.9 1.9 3.7 1.3 3.2 0.8 3.2-0.4 2.7-2.1 1.8-0.4 1.5 0.4 1.4 6.3-1.2 9.1-8.8 6.3 0.6 4.6 3.6 2.3 1 2.5-0.5 1.8-2.3 1-3 1.1-2.3 1.9-0.4 5.4 0.1 4.8 1.2 4.5 2.6 12.6 13.4 1.3 4.4-4.6 1.9 0.6 1.8 0 0.7-1.1 2-0.4 3 0 1.4-0.8 1.6-3.1 3-1.4 2-2.5 0.5-4.7-1.3-2.4 0.8-1.1 3-2.2 1.9-2.6 1.5-2.3 1.9-0.8 0.3-1.3 0.9-0.9 0.1 1 3.3-3-0.7-1.2 3.7 1.4 4.1 4.8 0.9 1.9 5.9 0.7 1.4 1.9 1.5 1.1-0.2 1.1-0.9 1.7-0.6 6.7 0 1.4 0.4 1.1 2.2 0.1 2.1-0.2 2.1 0.4 2.1 2.6 3.5 6.6 2.4 3.3 2.3 2.1 3 3.8 6.8 2.1 3 1.9 3.4 4.5 4.6 1.6 4.4 1.6 7.9 1.4 2.8 2.6 3.4z"
          name="Královéhradecký"
          onMouseMove={RegionClick}
          fill={GREEN}
          stroke={BASE_STROKE_COLOR}
          strokeWidth={BASE_STROKE_WIDTH}
        />
        <text
          name="Královéhradecký"
          x="53%"
          y="30%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          1000
        </text>
        <path
          d="M932.5 384.6l-1.6 0-0.9-0.4-0.8-0.6-0.7-1-0.5-1.3-1.2-6.5-0.4-1.5-0.7-1.2-0.9-1.1-2.5-1.6-1-1.1-3.1-6.6-0.7-0.9-2.6-0.9-11.2 0.1-1-0.3-4.4-3.2-1.4-0.6-23 2.3-1.3-0.2-1-0.6-0.8-0.8-0.6-1.1-0.6-2.9-0.4-0.9-1.1-1-6.5-0.1-2.3-2.6-1.8-1.4-4.2-1.1-0.3-2.9-0.7-2.5-0.5-1.2-1.6-2.1-4-3.4-4.6-2.2-1-1-4.5-9.5-0.8-0.9-0.9-0.2-0.8 0.3-2.7 1.8-1 0.2-1-0.3-0.8-0.9-0.5-1.2-0.1-1.5 0.8-7.6-0.2-1-0.7-1-3.4-2.9-4.2-2.1-5.4 1.8-3.8-0.3-5.4-3.7-0.8 0-0.8 0.4-3.4 2.6-7.5-0.4-2.2-1.1-11.3-12.3-1.1-0.4-1 0.2-4.2 2.3-1-0.1-12.6-6.4-0.6-0.6-0.4-0.7-0.4-2.4-0.3-0.6-0.7-0.4-6.3-0.9-2-0.8-0.6-0.8-0.4-0.8-0.1-1 0.7-8.4 0.3-1.3 0.4-1.1 4.2-5.6 0.3-0.7-0.4-1.4-4.1-4-0.6-1.2-0.3-1.2-0.1-1.3 0.1-1.3 0.4-1.3 0.6-1.1 8.8-12.4 0.5-1 0.1-1 0-1.1-1.7-6.8 0.1-1 0.4-0.9 1.5-2.4 0.3-1.2 0.3-3.5 0.5-1.6 0.7-1.4 2-2.3 11.9-6.7 3.4-5 0.8-0.7 0.8-0.3 0.9 0.1 2.1 1.3 1 0 1-0.4 1-0.9 0.8-1.1 0.6-1.1 0.4-1.2 0.2-1.1-2.3-13.7 3.2 2.7 1.4 4.3 0.7 0.5 0.8 0.1 0.8-0.1 0.7-0.5 4.4-5.3 7-0.7 13.2 2.4 3.4-0.9 2.5-2.1 4.4-6.1 0.8-1.9 0.4-1.5 1-0.7 2.5 1 0.8 0.7 3.1 4.2 0 1.4-0.4 0.7-1.6 4.3-0.3 2.1 0.4 2.4 1.5 1.5 2.3 4.3-1.4 3.5-2.9 2.6-6.3 3.7-4 1.6-7.1 0.3-1.6 0.8-1.1 2.3 0.3 1.7 7.2 9.1 2.3 1 1.5-0.2 1.2-0.8 1.6-0.3 1.9 0.5 4.1 2 2 0.4 0 0.8-1.3 1.2-0.5 1.3 0.4 1.3 1.4 1.4 1.7 1.9 1 2.6 0.8 2.8 1.2 2.8 1.6 2.3 9.6 9.5 5.3 1.1 5.4-1.6 4.4-3.9 2.7-0.7 5.9-0.2 4.8-1.4 0.7-1-0.2-2.3-1.1-1.6-1.2 0-1.2 0.3-0.8-0.3-0.6-5.2 4.5 1.1 8.6 5.7-0.9 4.2 1.9 2.3 9.4 1.8 2.2 1.2 4.7 4 1.7 0.8 3.5 0.7 1.8 1.3 0.6 1.3 1 3.6 0.8 1.5 3 2.4 2.1-0.4 4.1-3.6-0.3-0.7-0.6-0.1 5.9-0.7 5.7 2 11 6.1 3.4 0 5.9-3.8 2.1 1.4 0.9 4.1-0.3 3.5 0.6 2.8 3.9 2.2-4 4.7 0 6.1 2.6 7 3.5 7.1 1.5 6.7 0.9 1.7 2 1.4 4.5 0.4 2.1 0.6 1.9 1.6 2.9 3.4 1.9 1.2 2.1-0.2 2.4-1 2.3-0.4 2.2 1.6 0.6 1.8 1 7.9 0.7 2.1 1.7 4 0.7 2.1 2.1 9.7 0.4 4.7-0.6 3.8-6.1 0.2-2.7 1-6.1 5.6-4.1 0.2-4.3-1.3-4.8-2.4-1-0.2-1.1 0.2-4.2 2.2-6.5-0.9-3 1.9-0.8 1.9-0.4 4.2-0.7 2-1.2 1.2-4.9 2.6-6.3 7.8-3.3 2.1-4.3-0.9-0.1 2.7z"
          name="Moravskoslezský"
          onMouseMove={RegionClick}
          fill={RED}
          stroke={BASE_STROKE_COLOR}
          strokeWidth={BASE_STROKE_WIDTH}
        />
        <text
          name="Moravskoslezský"
          x="86%"
          y="53%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          1000
        </text>
        <path
          d="M421.2 346.7l2.1 2.3 0.6 1 0.4 1.1 0 1.1-0.6 1-1 0.7-5.2 1.6-0.9 0.5-0.3 0.9 2.2 8 0.4 3.7-0.2 4.2-3.1 12.3 0 1.6 0.4 1.4 0.6 1.1 2.5 2.4 0.7 1.3 0 1.1-0.3 4.7 0.2 1.1 0.4 1.2 0.8 1.1 5.5 5.2 2.8 1.7 1.3 0.2 1.4-0.4 2.5-2.4 1.3-0.4 1.3 0.1 2.3 1.4 3.3 3.2 4.3 2.9 3.9 5.2 5.9 3.8 0.6 0 0.7-0.4 2.6-4 0.7-0.5 0.8-0.3 0.9 0.1 7.8 4.1 0.6 0.4 1.7 0.4 7.2 0.9 1.2 0.5 0.9 1.2 0.6 1.9 0.3 3.6 0.3 2.1 0.5 1.5 0.7 1 7 6.6 1.3 0.5 3.1-0.5 7 1.3 2.1-0.2 5.7-2.3 1.1-0.1 0.6 0.4 7 7 0.9 1.2 0.3 1.4-0.4 0.5-1.4 0.9-1 0.3-3.2 0.2-0.8 0.1-0.8 1.3-0.3 2.6-0.3 1.1-0.7 1.5-4.8 5.7-0.7 0.9-0.6 2.7 0.4 1.5 1.2 0.3 0.5 0.5 1.2 2.6 0.9 0.6 1 0.2 2.3 0.2 1.8 0.4 1.3 1.1 0.8 1.1 0.1 0.8 0 1-0.7 2.3-2.3 5.7-0.5 1.8-0.6 1.4-0.4 2.1-3.4-1.3-7.3-6.3-3.1-1.9-6.6-2.2-7.1-3.6-3.3-0.9-6.9-0.1-0.7-0.5-0.7-1.1-0.7-1-1.1 0-0.6 1-0.4 3-0.5 1.2-2 2.4-0.8 0.5-11.2 3.1-3-0.1 1-3.2 0.1-3.1-0.7-3-1-3.2-11.5-0.9-8.2-2.9-3.3 0.5-0.4 0.3-0.3 0.8 0.2 2.2-2 4.8-0.1 6.4 0.6 6.9 0 6.2-3.1 14-1.1 2.9-0.3 1.5 0.3 1.4 0.7 1.8 1 1.9-1.7 3.9-3 0.3-7.7-3.2-7.7-1-2.2 0.8-0.9 2.2-0.6 2.7-1.4 2.6-0.8 4.3-7.7 6.8-2.8 4.6-0.6 6 0.1 6.8-0.7 5.8-3 3-2.4-0.1-1.2-1.5-0.9-2.1-1.5-2.1-1-0.2-2.3 0.8-1.1-0.2-0.5-0.9 0-1.5-0.2-1.4-0.9-0.9-2.3 0.2-4.4 2.2-2.2 0.5-1.8-0.5-5.9-3.1-3.5-4.1-2.2 1.4-3.3 8.9-2.3 2.4-7.7 3.3-2.9 2.4-1.2 0.4-1.4 0.2-14.7-5.2-20.9-2.3-5-2.2-1.2-1.1-2.6-3.1-0.6-1.3-0.7-3 0.3-0.7 0.8-0.3 1-2.1 0.4-0.3 0.8 0.1 0.6-0.2 0.3-1.4-0.4-1.3-0.9-0.6-1-0.5-0.7-0.7-1-1.8-2.4-3.8-1.3-1.4-10-5.5-3.2-2.7-2.7-2.1-2.8-1.5-5.9-1.6-2.9-3-7.1-14.3-3.5-5.3-2-1.2-5.5-0.9-2.8-1.3-2.6-2.5-2.3-3.5-1.5-4.1-0.4-4.3-2.7 0.3-2.5-1.3-2.5-2.1-2.6-1.5-2.4-0.6-0.2-2.1 3.2-6.9 3.4-5.3 3.2-3.2 0.7-1.2 0.4-1.3 0.1-2-0.4-2.4-0.1-2.4 0.6-3.3 1.9-4.9 1.5-1.8 1.4-0.6 1.8 0.3 1.2-0.5 1.4-2 3.9-7.4 1.3-1.3 1.6-1 1.2-0.4 0.8-0.7 0.1-0.9-0.7-1.6-2-2.1-0.6-0.8-0.2-0.8 0.1-0.9 1.4-2.1 0.5-0.9 0.2-0.8 0-1.3-0.9-2.2 0.2-1.6 1.3-1.4 2.5-1.6 0.8-0.6 1.1-2.5 0.8-2.9 1.3-2.9 2.8-4.8 0.7-1.4 0.2-1.5-0.2-1.9-0.8-4-0.4-2.8 0.3-3.5 1-4.3 0.2-1.1-0.2-2-1.9-7.3-2.1-4.7 8.6-5 1.5 0 1.7 1.2 0.8 0.3 3.1 0.1 1.8 0.6 0.9 0.6 2.6 1.5 1.3 0.2 1.5-0.2 2.7-1.4 1.9-1.2 7.1-2.2 0.8-0.8 0.8-2.6 0.8-1.6 0.9-0.8 1.7-0.9 1-0.2 1.1 0.2 1.5 0.8 1.8 1.4 0.9 0.3 2.8 0.2 1.9 0.7 3.9 0.1 8.6-1.1 2.9-1.2 2.7-2.7 1.3-0.6 1.8-0.4 2.3 0 1.8 0.5 1.3 0.9 0.5 1.5 0.6 0.9 1.7 0.6 1.2 1.1 1 1.5 0.7 0.6 1.1 0.5 1.1 0.1 1.5-0.2 6.9-3.9 1.2-0.2 1.9-0.1 1.9 0.5 2.5 1.3 2.7 0.4 16.4-0.7 1.9 0.5-0.2 1.3 0.3 0.9 3.5 0.5 1.6-0.2 1.6-0.4 3.5-2.3 2.2-2.2 1-0.5 4.8-1 2-1.6 1-1.4 0.3-6 0.3-1.4 0.9-1.8 1-1.5 1.9-1.6 1.2-0.1 0.8 0.9 1.1 1.4 1.3 1 4.3 1.3 0.8 0.7 0.5 0.9 0.2 2 0.7 0.5 1.5 0.2 2.9-0.6 1.8 0.7 0.9 0.6 1.3 3.2 0.6 0.9 1.5 1.5 1.3 0.7 1-0.2z"
          name="Jihočeský"
          onMouseMove={RegionClick}
          fill={BLUE}
          stroke={BASE_STROKE_COLOR}
          strokeWidth={BASE_STROKE_WIDTH}
        />
        <text
          name="Jihočeský"
          x="31.5%"
          y="80%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          1000
        </text>
        <path
          d="M397.564,62.201c0-1.62-1.084-3.03-2.656-3.434L254.697,22.856V8.294c0-4.584-3.707-8.294-8.293-8.294c-4.585,0-8.292,3.718-8.292,8.294l0.015,125.786h-5.799c-1.961,0-3.548,1.588-3.548,3.539v38.398H197.68V137.62 c0-1.952-1.588-3.539-3.549-3.539h-28.152c-1.959,0-3.547,1.588-3.547,3.539v38.398h-13.719h-17.381V137.62 c0-1.952-1.588-3.539-3.547-3.539H99.632c-1.959,0-3.547,1.588-3.547,3.539v38.398v16.117v16.83V237.7 c0,8.86,7.175,16.036,16.036,16.036h23.407L96.149,474.606c-0.842,4.673,0.438,9.476,3.482,13.112 c3.047,3.636,7.55,5.742,12.295,5.742h268.955c4.745,0,9.248-2.105,12.294-5.742c3.044-3.637,4.324-8.44,3.481-13.112 L357.28,253.736h23.405c8.862,0,16.038-7.176,16.038-16.036v-28.735v-16.83v-16.117V137.62c0-1.952-1.588-3.539-3.548-3.539h-28.152 c-1.961,0-3.547,1.588-3.547,3.539v38.398h-17.38h-13.722V137.62c0-1.952-1.586-3.539-3.547-3.539h-28.152 c-1.961,0-3.548,1.588-3.548,3.539v38.398h-31.1V137.62c0-1.952-1.588-3.539-3.547-3.539h-5.768l-0.017-32.534l140.211-35.911 C396.48,65.231,397.564,63.821,397.564,62.201z M284.6,333.917v69.434h-76.375v-69.434c0-21.09,17.09-38.186,38.195-38.186 C267.51,295.73,284.6,312.827,284.6,333.917z"
          name="Tower"
          style={{ transform: "scale(0.1) translate(860%, 400%)" }}
          fill="gold"
          stroke="black"
          strokeWidth="16"
        />
        <path
          d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
		C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
		c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
          fill="red"
          stroke="black"
          strokeWidth="40"
          strokeOpacity="1"
          style={{ transform: "scale(0.045) translate(1200%, 480%)" }}
        />
      </svg>
    </>
  );
};

export default MapSVG;

/*
        <text
          name="Moravskoslezský"
          x="86%"
          y="53%"
          fill="white"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          strokeWidth="1"
          pointerEvents="none"
          style={{ textShadow: "1px 1px grey" }}
        >
          200
        </text>
 */
