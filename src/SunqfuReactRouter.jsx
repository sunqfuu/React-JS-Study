//rcc
import React, { Component } from "react";
import SunqfuHeader from "./components/SunqfuHeader";
import SunqfuFooter from "./components/SunqfuFooter";
import SunqfuMain from "./components/SunqfuMain";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import SunqfuSpaCreate from "./components/sunqfuspa/SunqfuSpaCreate";
import SunqfuSpaList from "./components/sunqfuspa/SunqfuSpaList";
import SunqfuSpaView from "./components/sunqfuspa/SunqfuSpaList";
import SunqfuSpaUpdate from "./components/sunqfuspa/SunqfuSpaList";


class SunqfuReactRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <SunqfuHeader logo="Sunqfu Logo" title="Sunqfu" />
        <div className="container mb-5">
          <Routes>
            <Route path={"/"} element={<SunqfuMain/>}/>
            <Route path={"/index"} element={<SunqfuMain />} />
            
            <Route path={"/sunqfu/spa/list"} element={<SunqfuSpaList/>}/>
            <Route path={"/sunqfu/spa/create"} element={<SunqfuSpaCreate/>}/>
            <Route path={"/sunqfu/spa/view:id"} element={<SunqfuSpaView/>}/>
            <Route path={"/sunqfu/spa/update:id"} element={<SunqfuSpaUpdate />} />
            
            <Route path={"*"} element={<Navigate to={"/"} />}/>
          </Routes>
        </div>
        <SunqfuFooter copy="Sunqfu Footer" />
      </React.Fragment>
    );
  }
}

export default SunqfuReactRouter;
