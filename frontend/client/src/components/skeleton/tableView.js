import React from 'react';
import './tableView.css';


export default class TableView extends React.Component {
    render() {
        return (
          <div className="full-width">
            <div className="container-fluid">
              <div className="row" style="min-height: 16vh;">
                <div
                  className="col"
                  style="background-color: white; padding: 3vh 3vw;">
                  {" "}
                </div>
              </div>

              <div className="row" style="margin: 1rem; min-height: 30rem;">
                <div
                  class="col"
                  style="background-color: white; border-left : 5px solid black; border-radius: 8px; padding: 3vh 3vw;">
                  <p style="font-family: jotia; font-size: 1.35rem;">
                    <b>Graduate Developees</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}