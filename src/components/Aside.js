import React, { Component } from 'react'

export class Aside extends Component {
    render() {
        return (
            <aside>
                <div>
                    <h2>CaldAR</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Technicians</a>
                        </li>
                        <li>
                            <a href="#">Customers</a>
                        </li>
                        <li>
                            <a href="#">Reports</a>
                        </li>
                        <li>
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default Aside
