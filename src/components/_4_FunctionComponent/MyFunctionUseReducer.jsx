//
import React, { useReducer } from "react";


//Reducer
const reducerSunqfu = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        
        case "DECREMENT":
            return { count: state.count - 1 };
        
        default:
            return state;
        
    }
}

//Component

const ReducerCounterSunqfu = () => {
    //UseReducer
    const [state, dispatch] = useReducer(reducerSunqfu, { count: 0 });

    return (
        <div>
            <p className="ms-4">Count:{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn btn-primary ms-2 me-2">Artır</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} className="btn btn-danger ">Azalt</button>
        </div>
    )
}

export default ReducerCounterSunqfu;