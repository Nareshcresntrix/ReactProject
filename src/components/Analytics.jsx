import React from "react";
import { useState } from "react";
import { Badge, CardContent, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="h-[300px]">
        <Card variant="outlined">
          <CardContent>
            <h1 className="text-2xl mb-2">Users</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium ">14K</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-green-100 px-2  text-xs font-medium text-green-700 ring-1 ring-green-600/20 ">
                +25%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
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
          </CardContent>
        </Card>
      </div>
      <div className="h-[300px]">
        <Card variant="outlined">
          <CardContent>
            <h1 className="text-2xl mb-2">Users</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium ">14K</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-green-100 px-2  text-xs font-medium text-green-700 ring-1 ring-green-600/20 ">
                +25%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
              Last 30 days
            </span>
            <SparkLineChart
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              color={"red"}
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
          </CardContent>
        </Card>
      </div>
      <div className="h-[300px]">
        <Card variant="outlined">
          <CardContent>
            <h1 className="text-2xl mb-2">Users</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium ">14K</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-green-100 px-2  text-xs font-medium text-green-700 ring-1 ring-green-600/20 ">
                +25%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
              Last 30 days
            </span>
            <SparkLineChart
              data={[1, 4, 2, 5, 7, 2, 4, 6]}
              color={"grey"}
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
          </CardContent>
        </Card>
      </div>
      <div className="h-[300px] ">
        <Card variant="outlined" sx={{height: "82%" }}>
          <CardContent>
            <InsightsRoundedIcon fontSize="large" sx={{mb: 1}}/>
            <Typography
              component="h2"
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "600", mb: 1 }}
            >
              Explore your data
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: "15px" }}>
              Uncover performance and visitor insights with our data wizardry.
            </Typography>
            <button className="bg-gray-800 p-1 w-full border rounded-lg text-white shadow-2xl hover:bg-gray-600 ">
              Get Insight <ChevronRightRoundedIcon />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  
  );
}
