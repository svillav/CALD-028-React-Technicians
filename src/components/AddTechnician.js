import React, { Component } from 'react'

export class AddTechnician extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Add Technician</h2>
                    <form>
                        <div>
                            <p>Id</p>
                            <input type='text'/>
                            <p>First Name</p>
                            <input type='text'/>
                            <p>Last Name</p>
                            <input type='text'/>
                            <p>Email</p>
                            <input type='text'/>
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
                        <input type='submit' value='Add technician'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTechnician;
