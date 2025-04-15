// React JS
import React from 'react';

// React DOM
import ReactDOM from 'react-dom/client';

//External CSS
import './index.css';

// Components
// import App from './components/_1_Style/Style';
import JsxTutorials from './components/_2_Jsx/JsxTutorials';
import reportWebVitals from './reportWebVitals';


//Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <JsxTutorials/>
  </React.StrictMode>
);


reportWebVitals();
