import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation';
import TableView from './components/skeleton/tableView';
import Header from './components/skeleton/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navigation />
      <TableView />
    </div>
  );
}

export default App;
