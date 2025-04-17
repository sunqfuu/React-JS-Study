//Router Import
import { Route } from "react-router-dom";
//Import React

//Import React Router DOM
import { Link } from "react-router-dom";

//Home

import { Routes } from "react-router-dom";

function HomeSunqfu() {
  return (
    <div>
      <h2>Anasayfa</h2>
      <Link className="btn btn-primary" to="/">Anasayfa</Link>
      <Link className="btn btn-warning ms-2" to="/about">About</Link>
    </div>
  );
}

//About
function AboutSunqfu() {
    return (
        <div>
        <h2>Hakkımızda</h2>
        <Link className="btn btn-warning" to="/">Anasayfa</Link>
    </div>
    ) 
}

function MyRouterSunqfu() {
  return (
    <Routes>
      <Route path={"/"} element={<HomeSunqfu />} />
      <Route path={"/about"} element={<AboutSunqfu />} />
    </Routes>
  );
}

//Export

export default MyRouterSunqfu;
