// React
import React from "react";

// Function Component
function MyFunctionComponent(props) {
 
    //Object Destructuring
    const {content} = props;
    //Return
    return (
    <React.Fragment>
      <h1>My Function Component</h1>
      <p>
        {props.companyName} - {content}
      </p>
    </React.Fragment>
  );// End Return
}// End Function Component

//Export
export default MyFunctionComponent;
