import React, { useState, useEffect } from "react";


// Function Use Effect
function MyFunctionUseEffect(props) {
    
    //State

    const [secondSunqfu, setSecondSunqfu] = useState(0);

    useEffect(() => {
        const intervalSunqfuId = setInterval(() => {
            setSecondSunqfu((prevSecond) => prevSecond + 1);
        }, 1000);

        return () => clearInterval(intervalSunqfuId); // Cleanup interval
    }, []);


    return (
        <div>
            <h1>Seconds Elapsed: {secondSunqfu}</h1>
        </div>
    );
}// End Function

export default MyFunctionUseEffect;

