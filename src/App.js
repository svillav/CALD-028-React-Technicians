import React, { Component } from 'react';
import technicians from '../src/data/technicians.json';
import Header from './components/layout/Header';
import Aside from './components/layout/Aside';
import Technicians from './components/Technicians';
import AddTechnician from './components/AddTechnician';
import EditTechnician from './components/EditTechnician';
import './App.css';

export class App extends Component {
  state = { 
    technicians,
    technician: {}
  };

  addTechnician = ([id, firstName, lastName, email, typeIds, skillsId, hour_rate, daily_capacity]) => {
    const newTechnician = { 
      id,
      firstName,
      lastName,
      email,
      typeIds,
      skillsId,
      hour_rate,
      daily_capacity
    }
    this.setState({ technicians: [...this.state.technicians, newTechnician] })
  }

  selectItem = (id) => {
    const technciniansEdit = this.state.technicians.find(technician => technician.id === id);
    this.setState({ technician: technciniansEdit });
  }

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
          <Technicians technicians={this.state.technicians}
          deleteTechnician={this.deleteTechnician} 
          selectItem={this.selectItem} />
          <AddTechnician addTechnician={this.addTechnician}
          technicians={this.state.technicians} />
          <EditTechnician />
        </div>
      </div>
    );
  }
}

export default App;
