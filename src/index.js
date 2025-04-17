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
// import MyFunctionUseReducer from './components/_4_FunctionComponent/MyFunctionUseReducer';
// import MyContextApp from './components/_5_ContextComponent/MyContextApp';
// import { BrowserRouter } from 'react-router-dom';
// import MyRouterSunqfu from './components/_6_RouterComponent/MyRouterSunqfu';
import { Provider } from 'react-redux';
import store from './store';
import MyRedux from './components/_7_ReduxComponent/MyRedux';


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
    {/* <MyFunctionUseReducer /> */}
    {/* <MyContextApp/> */}
    {/* <BrowserRouter>
      <MyRouterSunqfu/>
    </BrowserRouter> */}
    
      {/* Redux */}
    <Provider store={store}>
      <MyRedux/>
    </Provider>

  </React.StrictMode>
);


reportWebVitals();
