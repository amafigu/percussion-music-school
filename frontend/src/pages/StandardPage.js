import { useEffectScrollTop } from "#utils/utils";
import React from "react";

import { Outlet } from "react-router-dom";

const LandingPage = () => {
  useEffectScrollTop();
  return <Outlet />;
};

export default LandingPage;
