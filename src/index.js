// React JS
import React from 'react';

// React DOM
import ReactDOM from 'react-dom/client';

//External CSS
import './index.css';

// Components
import reportWebVitals from './reportWebVitals';
// import App from './components/_1_Style/Style';
// import JsxTutorials from './components/_2_Jsx/JsxTutorials';
// import MyClassComponent from './components/_3_ClassComponents/MyClassComponent';
// import MyFunctionComponent from './components/_4_FunctionComponent/MyFunctionComponent';
// import MyFunctionSunqfuCounter from './components/_4_FunctionComponent/MyFunctionSunqfuCounter';
// import MyFunctionUseEffect from './components/_4_FunctionComponent/MyFunctionUseEffect';
import MyFunctionUseReducer from './components/_4_FunctionComponent/MyFunctionUseReducer';


//Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <JsxTutorials/> */}
    {/* <MyClassComponent companyName="Sunqfu" /> */}
    {/* <MyFunctionComponent companyName= "Sunqfu" content="Function Component Data"/> */}
    {/* <MyFunctionSunqfuCounter />  */}
    {/* <MyFunctionUseEffect/> */}
    <MyFunctionUseReducer/>
    
  </React.StrictMode>
);


reportWebVitals();
