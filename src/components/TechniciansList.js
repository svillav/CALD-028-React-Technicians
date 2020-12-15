import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../App.css';

export class TechniciansList extends Component {
    render() {
        const {
            id,
            firstName,
            lastName,
            email,
            typeIds,
            skillsId,
            hour_rate,
            daily_capacity
        } = this.props.technician;
        return  (
            <tr className="tbody" style={{height: '40px', textAlign: 'center'}}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{typeIds}</td>
                <td>{skillsId}</td>
                <td>{hour_rate}</td>
                <td>{daily_capacity}</td>
                <td>
                    <button className="update">Edit</button>
                </td>
                <td>
                    <button className="delete" onClick={this.props.deleteTechnician.bind(this, id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

TechniciansList.propTypes = {
    technician: propTypes.array.isRequired
}

export default TechniciansList
