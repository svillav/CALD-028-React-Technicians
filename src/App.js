import React, { Component } from 'react';
import technicians from '../src/data/technicians.json';
import Header from './components/Header';
import Aside from './components/Aside';
import Technicians from './components/Technicians';
import AddTechnician from './components/AddTechnician';
import './App.css';

export class App extends Component {
  state = { technicians };

  deleteTechnician = (id) => {
    this.setState({technicians: [...this.state.technicians.filter(technicians =>
      technicians.id !== id)]});
  }

  render() {
    return  (
      <div className="container">
        <Aside />
        <div className="main">
          <Header />
          <Technicians technicians = {this.state.technicians}
            deleteTechnician = {this.deleteTechnician} />
          <AddTechnician />
        </div>
      </div>
    );
  }
}

export default App;
