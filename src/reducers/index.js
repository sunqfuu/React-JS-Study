// import
import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

// Root Reducer
const rootReducer = combineReducers({
    counter: CounterReducer,
})

export default rootReducer;
