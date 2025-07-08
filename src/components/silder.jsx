import React from "react";
import Box from "@mui/material/Box";
import SelectContent from "../components/select";
import { Container, FormControl, Typography } from "@mui/material";
import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import Drawer from "@mui/material/Drawer";
import MenuContent from "./MenuContent";
import Divider from "@mui/material/Divider";
import SliderCard from "./SliderCard";
const drawerWidth = 240;
export default function Silder() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            display: { xs: "none", md: "block" },
            width: drawerWidth,
            flexShrink: 0,
          }}
          variant="permanent"
          anchor="left"
        >
          <SelectContent />
          <MenuContent/>
          <SliderCard/>
        </Drawer>
      </Box>
    </div>
  );
}
