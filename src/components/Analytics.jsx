import React from "react";
import { useState } from "react";
import { Badge, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import HighlightedCard from "./Highlights";
export default function Analytics() {
  //   const [showHighlight, setShowHighlight] = useState(true);
  //   const [showTooltip, setShowTooltip] = useState(true);

  //   const handleHighlightChange = (event) => {
  //     setShowHighlight(event.target.checked);
  //   };

  //   const handleTooltipChange = (event) => {
  //     setShowTooltip(event.target.checked);
  //   };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4" >
      <div className="box p-3 border shadow-2xl">
        <h3 className="mb-5 text-2xl">Users</h3>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium ">14K</h2>
          <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-green-100 px-2  text-xs font-medium text-green-700 ring-1 ring-green-600/20 ">
            +25%
          </span>
        </div>
        <span className="text-gray-500 text-xs tracking-widest">
          Last 30 days
        </span>
        <SparkLineChart
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          xAxis={{
            scaleType: "time",
            data: [
              new Date(2022, 3, 4), // April 4
              new Date(2022, 3, 5),
              new Date(2022, 3, 6),
              new Date(2022, 3, 7),
              new Date(2022, 3, 8),
              new Date(2022, 3, 9),
              new Date(2022, 3, 10),
              new Date(2022, 3, 11),
            ],
            valueFormatter: (value) =>
              value.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
          }}
          height={100}
          showTooltip
          showHighlight
        />
      </div>
      {/* <div className="box p-3">
        <h3 className="mb-5 text-2xl">Conversions</h3>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">325</h2>
          <span class="inline-flex items-center rounded-4xl outline-1 h-5 bg-red-100 px-2  text-xs font-medium text-red-700 ring-1 ring-red-600/20 ">
            -25%
          </span>
        </div>
        <span className="text-gray-500 text-xs tracking-widest">
          Last 30 days
        </span>
        <SparkLineChart
          color={"red"}
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          xAxis={{
            scaleType: "time",
            data: [
              new Date(2022, 3, 4), // April 4
              new Date(2022, 3, 5),
              new Date(2022, 3, 6),
              new Date(2022, 3, 7),
              new Date(2022, 3, 8),
              new Date(2022, 3, 9),
              new Date(2022, 3, 10),
              new Date(2022, 3, 11),
            ],
            valueFormatter: (value) =>
              value.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
          }}
          height={100}
          showTooltip
          showHighlight
        />
      </div>
      <div className="box p-3">
        <h3 className="mb-5 text-2xl">Event Count</h3>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">200K</h2>
          <span class="inline-flex items-center rounded-4xl outline-1 h-5 bg-gray-100 px-2  text-xs font-medium text-gray-700 ring-1 ring-gray-600/20 ">
            +5%
          </span>
        </div>
        <span className="text-gray-500 text-xs tracking-widest">
          Last 30 days
        </span>
        <SparkLineChart
          color={"grey"}
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          xAxis={{
            scaleType: "time",
            data: [
              new Date(2022, 3, 4), // April 4
              new Date(2022, 3, 5),
              new Date(2022, 3, 6),
              new Date(2022, 3, 7),
              new Date(2022, 3, 8),
              new Date(2022, 3, 9),
              new Date(2022, 3, 10),
              new Date(2022, 3, 11),
            ],
            valueFormatter: (value) =>
              value.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
          }}
          height={100}
          showTooltip
          showHighlight
        />
      </div>
      <div className="box">
        <HighlightedCard />
      </div> */}
    </div>
  );
}
