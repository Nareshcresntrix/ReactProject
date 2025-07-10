import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import CustomDatePicker from "./DatePicker";
import Search from "./Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
export default function Header() {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between ">
        <div>
          <BreadCrumbs />
        </div>
        <div className="flex gap-4">
          <Search />
          <CustomDatePicker />
          <Box
            sx={{ color: "action.active" }}
            className="cursor-pointer border-1 rounded-md p-2 "
          >
            <Badge color="secondary" variant="dot">
              <NotificationsIcon className="text-black" />
            </Badge>
          </Box>
        </div>
      </div>
      <h1 className="text-2xl">Overview</h1>
    </div>
  );
}
