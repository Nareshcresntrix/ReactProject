import React from "react";
import Silder from "../silder";
import { Slide } from "@mui/material";

export default function AboutPage() {
  return (
    <div className=" grid lg:grid-cols-14">
      <div className=" lg:col-span-2">
        <Silder />
      </div>
      <div className=" lg:col-span-12 lg:flex lg:justify-center">
        <h1 className="text-2xl my-3">About Page</h1>
      </div>
    </div>
  );
}
