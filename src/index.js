import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Greeting from './Greeting';
import BasicCalculator from './BasicCalculator';
import reportWebVitals from './reportWebVitals';
import Props from './Props';
import ClickCounter from './ClickCounter';
import TimeChange from './TimeChange';
import DigitalClock from './DigitalClock';
import FormHandling from './FormHandling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Greeting /> */}
    {/* <BasicCalculator />  */}
    {/* <Props /> */}
    {/* <ClickCounter /> */}
    {/* <TimeChange /> */}
    {/* <DigitalClock /> */}
    <FormHandling />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
