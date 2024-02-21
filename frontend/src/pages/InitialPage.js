import { scrollToTop } from "#utils/utils";
import React from "react";
import { Outlet } from "react-router-dom";

const InitialPage = () => {
  scrollToTop();
  return <Outlet />;
};

export default InitialPage;
