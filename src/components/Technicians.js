import React, { Component } from 'react';
import TechniciansList from './TechniciansList';
import propTypes from 'prop-types';
import '../App.css';

class Technicians extends Component {
    render() {
        return (
            <div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Type ID</th>
                            <th>Skills ID</th>
                            <th>Hour rate</th>
                            <th>Daily capacity</th>
                        </tr>
                        <tbody>
                            {this.props.technicians.map((technician) => 
                            <TechniciansList key={technician.id} technician={technician}
                            deleteTechnician={this.props.deleteTechnician}
                            selectItem={this.props.selectItem} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Technicians.propTypes = {
    technician: propTypes.array.isRequired
}

export default Technicians
