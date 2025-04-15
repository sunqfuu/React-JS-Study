import logo from "../../logo.svg";

// External CSS

// React
import React from "react";
// Functional Component

function JsxTutorials() {
  const allParagrafCSS = {
    backgroundColor: "#2f2f2",
    color: "blue",
    padding: "1rem",
    borderRadius: "1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    textShadow: "0 0 10px #fff",
    boxShadow: "0 0 10px #fff",
    border: "1px solid #fff",
    margin: "1rem",
    width: "50%",
    cursor: "pointer",
  };

  //Variables
  const elementSunqfu = (
    <div>
      <h1>
        Merhabalar <mark>Sunqfu</mark> JSX
      </h1>
    </div>
  );

  //Return
  return (
    <React.Fragment>
      <span>{elementSunqfu}</span>
    </React.Fragment>
  );
}

export default JsxTutorials;
