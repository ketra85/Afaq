import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import PMTable from './components/table/PMTable';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div id="content">
        <PMTable />
      </div>
    </div>
  );
}

export default App;
