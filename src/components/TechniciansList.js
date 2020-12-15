import React, { Component } from 'react';
import propTypes from 'prop-types';

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
            <tr style={{height: '40px', textAlign: 'center'}}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{typeIds}</td>
                <td>{skillsId}</td>
                <td>{hour_rate}</td>
                <td>{daily_capacity}</td>
                <td>
                    <button>Update</button>
                </td>
                <td>
                    <button onClick={this.props.deleteTechnician.bind(this, id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

TechniciansList.propTypes = {
    technician: propTypes.array.isRequired
}

export default TechniciansList
