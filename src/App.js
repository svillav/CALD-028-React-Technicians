import React, { Component } from 'react';
import technicians from '../src/data/technicians.json';
import Header from './components/Header';
import Aside from './components/Aside';
import Technicians from './components/Technicians';

export class App extends Component {
  state = { technicians };

  render() {
    return  (
      <div>
        <Aside />
        <Header />
        <Technicians technicians={this.state.technicians} />
      </div>
    );
  }
}

export default App;
