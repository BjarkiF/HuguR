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
import GeneralAdviceView from './views/GeneralAdviceView';
import ExerciseView from './views/ExerciseView';
import MoodBoosterView from './views/MoodboosterView';
import ProgramView from './views/ProgramView';
import RelaxView from './views/RelaxView';
import SleepView from './views/SleepView';
import Footer from './Components/Footer';
import HelpfulVideosView from './views/HelpfulVideosView';
import GeneralExerciseView from './views/GeneralExerciseView';


ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={ <DashboardView /> } />
      <Route path="/councel" element={ <CouncellerView /> } />
      <Route path="/eat" element={ <EatView /> } />
      <Route path="/exercise" element={ <ExerciseView /> } />
      <Route path="/moodboost" element={ <MoodBoosterView /> } />
      <Route path="/programs" element={ <ProgramView /> } />
      <Route path="/relax" element={ <RelaxView /> } />
      <Route path="/sleep" element={ <SleepView /> } />
      <Route path="/general%20advice/:category" element={ <GeneralAdviceView />} />
      <Route path="/helpful%20videos/:category" element={ <HelpfulVideosView />} />
      <Route path="/exercises/:category" element={ <GeneralExerciseView />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
