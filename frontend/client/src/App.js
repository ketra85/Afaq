import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import PMTable from './components/table/PMTable';

function App() {
  return (
    <div class="wrapper">
      <Navigation />
      <div id="content">
        <div className="row no-gutters">
          <div className="col-12 headerBox"></div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 contentBox rpd">
            <div className="tableDiv">
              <div className="h5 afaqHeading">Graduate Developees</div>
              <PMTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
