import React from "react";
import Header from "./Header";
import Silder from "./silder";
import Box from "@mui/material/Box";
import MainGird from "./MainGird";
export default function Dashboard() {
  return (
    <>
      <div className="flex ">
        <div className="w-1/6 p-4">
          <Silder />
        </div>
        <div className="w-full p-4">
          <Header />
          <MainGird />
        </div>
      </div>
    </>
  );
}
