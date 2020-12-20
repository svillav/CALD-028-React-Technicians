import React, { Component } from 'react';

export class AddTechnician extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        typeIds: '',
        skillsId: '',
        hour_rate: '',
        daily_capacity: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTechnician([
            this.state.id,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.typeIds,
            this.state.skillsId,
            this.state.hour_rate,
            this.state.daily_capacity
        ]);
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            typeIds: '',
            skillsId: '',
            hour_rate: '',
            daily_capacity: ''
        });
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="addSection">
                    <h2>Add Technician</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="inputSection">
                            <div className="formCol">
                                <p>Id</p>
                                <input 
                                    type = 'text'
                                    name = 'id'
                                    placeholder = 'Id'
                                    value = {this.state.id} 
                                    onChange = {this.onChange} 
                                />
                                <p>First Name</p>
                                <input 
                                    type = 'text'
                                    name = 'firstName'
                                    placeholder = 'First Name'
                                    value = {this.state.firstName} 
                                    onChange = {this.onChange} 
                                />
                                <p>Last Name</p>
                                <input 
                                    type = 'text'
                                    name = 'lastName'
                                    placeholder = 'Last Name'
                                    value = {this.state.lastName} 
                                    onChange = {this.onChange} 
                                />
                                <p>Email</p>
                                <input 
                                    type = 'text'
                                    name = 'email'
                                    placeholder = 'Email'
                                    value = {this.state.email} 
                                    onChange = {this.onChange} 
                                />
                            </div>
                            <div className="formCol">    
                                <p>Type ID</p>
                                <input 
                                    type = 'text'
                                    name = 'typeIds'
                                    placeholder = 'Type ID'
                                    value = {this.state.typeIds} 
                                    onChange = {this.onChange} 
                                />
                                <p>Skills ID</p>
                                <input 
                                    type = 'text'
                                    name = 'skillsId'
                                    placeholder = 'Skills ID'
                                    value = {this.state.skillsId} 
                                    onChange = {this.onChange} 
                                />
                                <p>Hour rate</p>
                                <input 
                                    type = 'text'
                                    name = 'hour_rate'
                                    placeholder = 'Hour Rate'
                                    value = {this.state.hour_rate} 
                                    onChange = {this.onChange} 
                                />
                                <p>Daily capacity</p>
                                <input 
                                    type = 'text'
                                    name = 'daily_capacity'
                                    placeholder = 'Daily capacity'
                                    value = {this.state.daily_capacity} 
                                    onChange = {this.onChange} 
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type='submit'
                                value='add'
                                className="submitButton"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTechnician;
