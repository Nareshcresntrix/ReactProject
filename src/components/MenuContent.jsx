import React from "react";
import { Container, FormControl, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

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
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";

function MenuContent() {
  const routes1=["/","/analytics","/clients","/tasks"]
  const routes2=["/settings","/about","/feedback"]
  return (
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
        <List>
          {["Home", "Analytics", "Clients", "Tasks"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={routes1[index]}>
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeIcon />
                  ) : index === 1 ? (
                    <AnalyticsIcon />
                  ) : index === 2 ? (
                    <GroupIcon />
                  ) : (
                    <AssignmentIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Settings", "About", "Feedback"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={routes2[index]}>
                <ListItemIcon>
                  {index === 0 ? (
                    <SettingsIcon />
                  ) : index === 1 ? (
                    <InfoIcon />
                  ) : (
                    <FeedbackIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>

  );
}

export default MenuContent;
