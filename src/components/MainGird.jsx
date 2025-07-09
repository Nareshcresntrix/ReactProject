import React from "react";
import Analytics from "./Analytics";
import Session from "./Session";
import PageViewsBarChart from "./ViewPagestatic";


export default function MainGird() {
  return (
    <>
      <div className="my-5 ">
        <Analytics />
      </div>
      <div className="flex  justify-between">
        <div className="w-[49%]">
            <Session/>
        </div>
        <div className="w-[49%]">
           <PageViewsBarChart/>
        </div>
      </div>
    </>
  );
}




