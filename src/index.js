// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// //import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

//////////////////////////////////////////////
import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter, } from "react-router-dom";
//import ApiFetch from './ApiFetch';

import App from './App';
//import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BrowserRouter>



<App />



</BrowserRouter>);


