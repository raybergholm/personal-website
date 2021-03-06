import React from "react";

import Header from "../components/layout/Header";
import TwoColumnRightBody from "../components/layout/TwoColumnRightBody";
import Sidebar from "../components/Sidebar";
import AppRouter from "../AppRouter";

import "./App.css";

const AppView = (props) => (
  <div>
    <Header />
    <TwoColumnRightBody side={<Sidebar {...props} />}>
      <AppRouter />
    </TwoColumnRightBody>
  </div>
);

export default AppView;