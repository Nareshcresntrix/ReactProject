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
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import { useTheme } from "@mui/material/styles";
import { areaElementClasses } from "@mui/x-charts/LineChart";

export default function Analytics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="h-[300px]">
        <Card variant="outlined">
          <CardContent>
            <h1 className="text-2xl mb-2">Users</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium">14K</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-green-100 px-2 text-xs font-medium text-green-700 ring-1 ring-green-600/20">
                +25%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
              Last 30 days
            </span>

            <SparkLineChart
              area
              data={[
                500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530,
                620, 510, 530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420,
                453, 564, 575,
              ]}
              color={"green"}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fillOpacity: 0.2,
                },
              }}
              xAxis={{
                scaleType: "time",
                data: [
                  new Date(2022, 3, 1),
                  new Date(2022, 3, 2),
                  new Date(2022, 3, 3),
                  new Date(2022, 3, 4),
                  new Date(2022, 3, 5),
                  new Date(2022, 3, 6),
                  new Date(2022, 3, 7),
                  new Date(2022, 3, 8),
                  new Date(2022, 3, 9),
                  new Date(2022, 3, 10),
                  new Date(2022, 3, 11),
                  new Date(2022, 3, 12),
                  new Date(2022, 3, 13),
                  new Date(2022, 3, 14),
                  new Date(2022, 3, 15),
                  new Date(2022, 3, 16),
                  new Date(2022, 3, 17),
                  new Date(2022, 3, 18),
                  new Date(2022, 3, 19),
                  new Date(2022, 3, 20),
                  new Date(2022, 3, 21),
                  new Date(2022, 3, 22),
                  new Date(2022, 3, 23),
                  new Date(2022, 3, 24),
                  new Date(2022, 3, 25),
                  new Date(2022, 3, 26),
                  new Date(2022, 3, 27),
                  new Date(2022, 3, 28),
                  new Date(2022, 3, 29),
                  new Date(2022, 3, 30),
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
            <h1 className="text-2xl mb-2">Conversions</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium ">325</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-red-100 px-2  text-xs font-medium text-red-700 ring-1 ring-red-600/20 ">
                -25%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
              Last 30 days
            </span>
            <SparkLineChart
              area
              data={[
                1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820,
                840, 600, 820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520,
                560, 580, 600, 620, 640,
              ]}
              color={"red"}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fillOpacity: 0.2,
                },
              }}
              xAxis={{
                scaleType: "time",
                data: [
                  new Date(2022, 3, 1),
                  new Date(2022, 3, 2),
                  new Date(2022, 3, 3),
                  new Date(2022, 3, 4),
                  new Date(2022, 3, 5),
                  new Date(2022, 3, 6),
                  new Date(2022, 3, 7),
                  new Date(2022, 3, 8),
                  new Date(2022, 3, 9),
                  new Date(2022, 3, 10),
                  new Date(2022, 3, 11),
                  new Date(2022, 3, 12),
                  new Date(2022, 3, 13),
                  new Date(2022, 3, 14),
                  new Date(2022, 3, 15),
                  new Date(2022, 3, 16),
                  new Date(2022, 3, 17),
                  new Date(2022, 3, 18),
                  new Date(2022, 3, 19),
                  new Date(2022, 3, 20),
                  new Date(2022, 3, 21),
                  new Date(2022, 3, 22),
                  new Date(2022, 3, 23),
                  new Date(2022, 3, 24),
                  new Date(2022, 3, 25),
                  new Date(2022, 3, 26),
                  new Date(2022, 3, 27),
                  new Date(2022, 3, 28),
                  new Date(2022, 3, 29),
                  new Date(2022, 3, 30),
                ],
                valueFormatter: (value) =>
                  value.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  }),
              }}
              height={100}
              showHighlight
              showTooltip
            />
          </CardContent>
        </Card>
      </div>
      <div className="h-[300px]">
        <Card variant="outlined">
          <CardContent>
            <h1 className="text-2xl mb-2">Event Count</h1>
            <div className="flex justify-between mb-1">
              <h2 className="text-3xl font-medium ">200K</h2>
              <span className="inline-flex items-center rounded-4xl outline-1 h-5 bg-gray-100 px-2  text-xs font-medium text-gray-700 ring-1 ring-gray-600/20 ">
                +5%
              </span>
            </div>
            <span className="text-gray-500 text-xs tracking-widest mb-2">
              Last 30 days
            </span>
            <SparkLineChart
            area
              data={[
                200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320,
                360, 340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480,
                389, 390,
              ]}
              color={"grey"}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fillOpacity: 0.2,
                },
              }}
              xAxis={{
                scaleType: "time",
                data: [
                  new Date(2022, 3, 1), // April 4
                  new Date(2022, 3, 2),
                  new Date(2022, 3, 3),
                  new Date(2022, 3, 4),
                  new Date(2022, 3, 5),
                  new Date(2022, 3, 6),
                  new Date(2022, 3, 7),
                  new Date(2022, 3, 8),
                  new Date(2022, 3, 9),
                  new Date(2022, 3, 10),
                  new Date(2022, 3, 11),
                  new Date(2022, 3, 12),
                  new Date(2022, 3, 13),
                  new Date(2022, 3, 14),
                  new Date(2022, 3, 15),
                  new Date(2022, 3, 16),
                  new Date(2022, 3, 17),
                  new Date(2022, 3, 18),
                  new Date(2022, 3, 19),
                  new Date(2022, 3, 20),
                  new Date(2022, 3, 21),
                  new Date(2022, 3, 22),
                  new Date(2022, 3, 23),
                  new Date(2022, 3, 24),
                  new Date(2022, 3, 25),
                  new Date(2022, 3, 26),
                  new Date(2022, 3, 27),
                  new Date(2022, 3, 28),
                  new Date(2022, 3, 29),
                  new Date(2022, 3, 30),
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
        <Card variant="outlined" sx={{ height: "82%" }}>
          <CardContent>
            <InsightsRoundedIcon fontSize="large" sx={{ mb: 1 }} />
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
