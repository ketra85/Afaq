import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import MainPage from './MainPage';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div id="content">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
