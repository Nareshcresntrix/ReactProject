import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { Box, Divider } from "@mui/material";
import Badge from "@mui/material/Badge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function SliderCard() {
  return (
    <>
      <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
        <CardContent>
          <AutoAwesomeRoundedIcon fontSize="small" />
          <Typography gutterBottom sx={{ fontWeight: 600 }}>
            Plan about to expire
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: "text.secondary", width: "21ch" }}
          >
            Enjoy 10% off when renewing your plan today.
          </Typography>
          <button className="bg-gray-700 p-2 w-full border rounded-lg text-white shadow-2xl hover:bg-gray-600">
            Get the Discount
          </button>
        </CardContent>
      </Card>
      <Divider />
      <Stack className="p-3" direction="row" spacing={2} alignItems={"center"}>
        <Avatar alt="Remy Sharp" src="./src/assets/person.jpg" />
        <Stack>
          <Typography>Riley Carter</Typography>
          <Typography variant="body2">riley@gmail.com</Typography>
        </Stack>
        <MoreVertIcon className="cursor-pointer hover:border-dashed"/>
      </Stack>
    </>
  );
}
