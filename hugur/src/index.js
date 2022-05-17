import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/commonStyles.css';
import './utils/firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CouncellerView from "./views/CouncellerView";
import DashboardView from "./views/DashboardView";
import EatView from "./views/EatView";
import ExerciseView from "./views/ExerciseView";
import GeneralAdviceView from './views/GeneralAdviceView';
import MoodBoosterView from './views/MoodboosterView';
import ProgramView from './views/ProgramView';
import RelaxView from './views/RelaxView';
import SleepView from './views/SleepView';
import Footer from './Components/Footer';
import HelpfulVideosView from './views/HelpfulVideosView';
import GeneralExerciseView from './views/GeneralExerciseView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import QuestionnaireView from './views/QuestionnaireView';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import QuestionResultView from './views/QuestionResultView';
import ProductivityView from './views/ProductivityView';

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
      <Route path="/productivity" element={ <ProductivityView /> } />
      <Route path="/general%20advice/:category" element={ <GeneralAdviceView />} />
      <Route path="/helpful%20videos/:category" element={ <HelpfulVideosView />} />
      <Route path="/exercises/:category" element={ <GeneralExerciseView />} />
      <Route path="/login" element={ <LoginView /> } />
      <Route path="/register" element={ <RegisterView /> } />
      <Route path="/profile" element={ 
        <RequireAuth redirect="/login">
          <ProfileView />
        </RequireAuth>
        }
      />
      <Route path="/questionnaire" element={ 
        <RequireAuth redirect="/login">
          <QuestionnaireView />
        </RequireAuth>
        }
      />
      <Route path="/results" element={ <QuestionResultView /> } />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

function RequireAuth({ children, redirect }) {
  const auth = getAuth();
  return auth.currentUser ? children : <Navigate to={redirect} />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
