import React, { useState } from "react";

// Function Component
function MyFunctionSunqfuCounter() {

    //State
    const [count, setCount] = useState(0);

    //Function to Handle Click
   const sunqfuIncrease = () => {
        setCount(count + 1);
    };
    
    const sunqfuDecrease = () => {
        setCount(count - 1);
    };

    const sunqfuReset = () => {
        setCount(0);
    };

  //Return
    return (
        <div className="container text-center mt-5">
        <h1> Counter </h1>
        {/* <p className="display-6">{this.state.count}</p> */}
        <p className="display-6">{count}</p>
        <button className="btn btn-primary me-2" onClick={sunqfuIncrease}>
          Increase
        </button>
        <button className="btn btn-danger me-2" onClick={sunqfuDecrease}>
          Decrease
        </button>
        <button className="btn btn-warning me-2" onClick={sunqfuReset}>
          Reset
        </button>
      </div>
    )//End Return
}// End Function

//Export
export default MyFunctionSunqfuCounter;
