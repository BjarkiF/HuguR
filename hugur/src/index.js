import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/commonStyles.css';
import './utils/firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import CouncellerView from './views/CouncellerView';
import EatView from './views/EatView';

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path ="/" element={ <DashboardView /> } ></Route>
      <Route path ="/councel" element={ <CouncellerView /> } ></Route>
      <Route path ="/eat" element={ <EatView /> } ></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
