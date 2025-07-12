import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Menu,
  MenuItem as MuiMenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { listClasses } from "@mui/material/List";
import { paperClasses } from "@mui/material/Paper";
import { dividerClasses } from "@mui/material/Divider";
import { listItemIconClasses } from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

const MenuItem = styled(MuiMenuItem)({
  margin: "2px 0",
});

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const route = "/login";
  const handleClick = (event) => {
    console.log(event.currentTarget); // 👈 logs the button DOM element
    console.log(Boolean(event.currentTarget)); // 👈 logs `true`
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: "transparent" }}
      >
        <MoreVertRoundedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Add another account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} component={Link} to={route}>
          <ListItemText >
            Logout
          </ListItemText>
          <ListItemIcon >
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}
