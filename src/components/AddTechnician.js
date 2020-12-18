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
    
    

    render() {
        return (
            <div>
                <div className="addSection">
                    <h2>Add Technician</h2>
                    <form>
                        <div className="formCol">
                            <p>Id</p>
                            <input type='text'/>
                            <p>First Name</p>
                            <input type='text'/>
                            <p>Last Name</p>
                            <input type='text'/>
                            <p>Email</p>
                            <input type='text'/>
                        </div>
                        <div className="formCol">    
                            <p>Type ID</p>
                            <input type='text'/>
                            <p>Skills ID</p>
                            <input type='text'/>
                            <p>Hour rate</p>
                            <input type='text'/>
                            <p>Daily capacity</p>
                            <input type='text'/>
                        </div>
                    </form>
                    <div>
                        <input type='submit' value='Submit' className="submitButton"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTechnician;
