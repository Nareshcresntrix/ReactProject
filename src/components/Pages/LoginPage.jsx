import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Snackbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function LoginPage() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const validate = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (password.value.length>6 && email.value && !isChecked) {
      enqueueSnackbar("Please accept the terms and conditions", {
        variant: "error",
        vertical: "top",
        horizontal: "center",
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      enqueueSnackbar("Signed in successfully", { variant: "success" });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[600px] w-[450px] shadow-2xl bg-white rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-left my-5">Sign in</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            required
            autoFocus
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            color={emailError ? "error" : "primary"}
            InputProps={{ sx: { height: 45 } }}
          />

          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            color={passwordError ? "error" : "primary"}
            InputProps={{ sx: { height: 45 } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                id="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            }
            label="I agree to the terms and conditions"
            sx={{ alignSelf: "start" }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Sign In
          </Button>

          <Link to={"#"}>
            <h1 className="text-md text-center cursor-pointer">
              Forgot your password?
            </h1>
          </Link>

          <Divider>or</Divider>

          <div className="flex gap-2 border rounded-md p-2 justify-center">
            <img
              src="../src/assets/google.png"
              alt=""
              className="h-[25px] w-[25px]"
            />
            <button type="button">Sign in with Google</button>
          </div>

          <div className="flex gap-2 border rounded-md p-2 justify-center">
            <img
              src="../src/assets/fb.png"
              alt=""
              className="h-[25px] w-[25px]"
            />
            <button type="button">Sign in with Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
}
