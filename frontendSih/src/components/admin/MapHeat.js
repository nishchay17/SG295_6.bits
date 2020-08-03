import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("../../india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#e8e8e8";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: -1 },
    { id: "AR", state: "Arunachal Pradesh", value: -1 },
    { id: "AS", state: "Assam", value: -1 },
    { id: "BR", state: "Bihar", value: -1 },
    { id: "CT", state: "Chhattisgarh", value: -1 },
    { id: "GA", state: "Goa", value: -1 },
    { id: "GJ", state: "Gujarat", value: 110 },
    { id: "HR", state: "Haryana", value: -1 },
    { id: "HP", state: "Himachal Pradesh", value: -1 },
    { id: "JH", state: "Jharkhand", value: -1 },
    { id: "KA", state: "Karnataka", value: -1 },
    { id: "KL", state: "Kerala", value: -1 },
    { id: "MP", state: "Madhya Pradesh", value: 20 },
    { id: "MH", state: "Maharashtra", value: 20 },
    { id: "MN", state: "Manipur", value: -1 },
    { id: "ML", state: "Meghalaya", value: -1 },
    { id: "MZ", state: "Mizoram", value: -1 },
    { id: "NL", state: "Nagaland", value: -1 },
    { id: "OR", state: "Odisha", value: -1 },
    { id: "PB", state: "Punjab", value: -1 },
    { id: "RJ", state: "Rajasthan", value: -1 },
    { id: "SK", state: "Sikkim", value: 410 },
    { id: "TN", state: "Tamil Nadu", value: 0 },
    { id: "TG", state: "Telangana", value: 0 },
    { id: "TR", state: "Tripura", value: 0 },
    { id: "UT", state: "Uttarakhand", value: 0 },
    { id: "UP", state: "Uttar Pradesh", value: 0 },
    { id: "WB", state: "West Bengal", value: 0 },
    { id: "WB", state: "West Bengal", value: 0 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 0 },
    { id: "CH", state: "Chandigarh", value: 0 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 0 },
    { id: "DD", state: "Daman and Diu", value: 0 },
    { id: "DL", state: "Delhi", value: 0 },
    { id: "JK", state: "Jammu and Kashmir", value: 0 },
    { id: "LA", state: "Ladakh", value: 0 },
    { id: "LD", state: "Lakshadweep", value: 0 },
    { id: "PY", state: "Puducherry", value: 0 },
  ];
};

function Map() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div className="full-width-height container">
      <h4 className="no-margin center">State wise Numbers</h4>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Map;
