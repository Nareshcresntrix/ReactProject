import React from "react";
import Header from "./Header";
import Silder from "./silder";
import Box from "@mui/material/Box";
import MainGird from "./MainGird";
import AppNavBar from "./AppNavBar";
import DataGrids from "./DataGrid";
import { TreeItem } from "@mui/x-tree-view";
import TreeView from "./TreeView";
import { Card, CardContent } from "@mui/material";
// import PieChart from "./PieChart";
import PieCharts from "./PieChart";
export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className=" p-4">
          <Silder />
        </div>
        <div className=" p-4">
          <Header />
          <AppNavBar />
          <MainGird />
          <h1 className="text-2xl my-3">Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  my-5">
            <div className="">
              <DataGrids />
            </div>
            <div className="">
              <div>
                <TreeView />
              </div>
              <div>
                <PieCharts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
