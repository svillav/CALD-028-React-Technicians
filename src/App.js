import React, { Component } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Technicians from './components/Technicians';
import TechniciansList from './components/TechniciansList';

export class App extends Component {
  render() {
    return  (
      <div>
        <Aside />
        <Header />
        <Technicians />
        <TechniciansList />
      </div>
    );
  }
}

export default App;
