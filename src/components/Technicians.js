import React, { Component } from 'react';
import TechniciansList from './TechniciansList';
import propTypes from 'prop-types';

class Technicians extends Component {
    render() {
        return (
            <div>
                <div className='app-list'>
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
                            {this.props.technicians.map((technicians) => 
                                <TechniciansList />
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
