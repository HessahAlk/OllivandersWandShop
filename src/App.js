import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import wands from './wands.js'
import WandsList from './WandsList.js'
import WandCard from './WandCard.js'


class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
          </div>
          <div className="content col-10">
            <WandsList wands={wands} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
