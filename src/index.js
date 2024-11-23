import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const ROOT = 
// ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//create root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//use the root element to render your app
root.render(<React.StrictMode><App /></React.StrictMode>);