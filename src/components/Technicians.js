import React, { Component } from 'react';
import TechniciansList from './TechniciansList';
import propTypes from 'prop-types';

class Technicians extends Component {
    render() {
        return (
            <div>
                <div className='app-list'>
                    <table>
                        <thead>
                            <tr>Id</tr>
                            <tr>First Name</tr>
                            <tr>Last Name</tr>
                            <tr>Email</tr>
                            <tr>Type ID</tr>
                            <tr>Skills ID</tr>
                            <tr>Hour rate</tr>
                            <tr>Daily capacity</tr>
                        </thead>
                        <tbody>
                            {this.props.technicians.map((technician) => 
                                <TechniciansList key={technician.id} technician={technician}/>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Technicians.propTypes = {
    technicians: propTypes.array.isRequired
}

export default Technicians
