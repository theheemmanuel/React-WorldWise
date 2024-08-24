// import React from "react";
import Sidebar from "./Sidebar";
import Map from "./Map";
import User from "./User";

const Worldapp = () => {
  return (
    <div className="flex m-6">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default Worldapp;
