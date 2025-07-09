import React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Search() {
  return (
    <div>
      <FormControl
        sx={{ width: { xs: "100%", md: "25ch" , borderRadius:"90px"} }}
        variant="outlined"
        
      >
        <OutlinedInput
          size="small"
          id="search"
          placeholder="Search…"
          sx={{ flexGrow: 1 }}
          className="rounded-xl"
          startAdornment={
            <InputAdornment position="start" sx={{ color: "text.primary" }}  >
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
