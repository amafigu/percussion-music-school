import { useEffectScrollTop } from "#utils/utils";
import React from "react";

import { Outlet } from "react-router-dom";

const InitialPage = () => {
  useEffectScrollTop();
  return <Outlet />;
};

export default InitialPage;
