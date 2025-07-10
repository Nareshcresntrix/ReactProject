import React from "react";
import Analytics from "./Analytics";
import Session from "./Session";
import PageViewsBarChart from "./ViewPagestatic";

export default function MainGird() {
  return (
    <>
      <div className="my-3 ">
        <Analytics />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between gap-5">
        <div>
          <Session />
        </div>
        <div>
          <PageViewsBarChart />
        </div>
      </div>
    </>
  );
}
