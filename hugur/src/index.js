import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/commonStyles.css';
import './utils/firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CouncellerView from "./views/CouncellerView";
import DashboardView from "./views/DashboardView";
import EatView from "./views/EatView";
import ExerciseView from "./views/ExerciseView";
import GeneralAdviceView from './views/GeneralAdviceView';
import MoodboosterView from './views/MoodboosterView';
import ProgramView from './views/ProgramView';
import RelaxView from './views/RelaxView';
import SleepView from './views/SleepView';

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={ <DashboardView /> } >
        <Route path="/councel" element={ <CouncellerView /> } />
        <Route path="/eat" element={ <EatView /> } />
        <Route path="/exercise" element={ <ExerciseView /> } />
        <Route path="/moodboost" element={ <MoodboosterView /> } />
        <Route path="/programs" element={ <ProgramView /> } />
        <Route path="/relax" element={ <RelaxView /> } />
        <Route path="/sleep" element={ <SleepView /> } />
        <Route path="advice/:category" element={ <GeneralAdviceView />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
