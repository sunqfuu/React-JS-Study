import { createContext, useContext } from "react";


// Create a Context

const MyContextCreate = createContext();

function MyContextProvider({ children }) {
    const sharedData = {
         sunqfuMessage : "Sunqfu React JS Learning",
    }
    
    return (
        <MyContextCreate.Provider value={sharedData}>
            {children}
        </MyContextCreate.Provider>
    );
}
 
function MyContextConsumer() {
    const sharedData = useContext(MyContextCreate);
    return (
        <div>
            <p>{sharedData.sunqfuMessage}</p>
        </div>
    )
    }

function MyContextApp() {
    return (
        <MyContextProvider>
            <MyContextConsumer/>
        </MyContextProvider>
    )
}

export default MyContextApp;