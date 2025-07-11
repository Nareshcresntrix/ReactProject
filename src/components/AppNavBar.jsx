import React from "react";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import SelectContent from "./select";
import MenuContent from "./MenuContent";
import SliderCard from "./SliderCard";
const drawerWidth = 240;
export default function AppNavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  return (
    <>
      <div className="block lg:hidden ">
        <Box sx={{ display: "flex" }}>
          <Drawer
            anchor="right"
            variant="temporary"
            open={open}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Improves performance on mobile
            }}
            sx={{
              // display: { xs: "block", lg: "none" },
              width: drawerWidth,
            }}
          >
            <SelectContent />
            <MenuContent />
            <SliderCard />
          </Drawer>
        </Box>
      </div>

      <div className="block md:hidden">
        {/* <Divider /> */}
      </div>
      <nav className="block fixed top-0 left-0 right-0 bg-white z-10  rounded  lg:hidden !m-0 sm:m-0 p-3 my-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DashboardIcon
              style={{
                fontSize: "35px",
                border: "1px solid oklch(68.5% 0.169 237.323)",
                borderRadius: "50%",
                padding: "5px",
                color: "oklch(96.2% 0.018 272.314)",
                backgroundColor: "oklch(68.5% 0.169 237.323)",
              }}
            />
            <h1 className="text-2xl">DashBoard</h1>
          </div>
          <div onClick={toggleDrawer}>
            <MenuIcon
              sx={{
                fontSize: "35px",
                border: "1px solid",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </nav>
      <div className="block md:hidden">
        {/* <Divider /> */}
      </div>
      <h1 className="text-2xl font-semibold my-2 block md:hidden ">Overview</h1>
    </>
  );
}
