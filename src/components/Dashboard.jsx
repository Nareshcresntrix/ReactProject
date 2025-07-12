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
import Sample from "./sample";
import { Route, Routes } from "react-router-dom";
import AnalyticsPage from "./Pages/AnalyticsPage";
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
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-5 my-5">
            <div className="  xl:col-span-9">
              <DataGrids />
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row xl:flex-col xl:col-span-3 gap-3 ">
              <div className="w-full ">
                <TreeView />
              </div>
              <div className="w-full">
                <PieCharts />
              </div>
            </div>
            {/* <Sample /> */}
          </div>
        </div>
      </div>
    </>
  );
}
