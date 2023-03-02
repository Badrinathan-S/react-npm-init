import React from "react";
import { Outlet } from "react-router-dom";
import PocHeader from "./PocHeader";

const HomeTemplate = () => {
  return (
    <div>
      <PocHeader />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
