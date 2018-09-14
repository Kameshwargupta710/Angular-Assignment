import React, { Component } from 'react';
import ReactDOM from 'react-dom';;

class App extends Component {


    //State is set , when a user enter username value get stored in the state

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.setState({ value: event.target.value });
        event.preventDefault();
    }



    // deleteuser=(id,e)=>{
    //     const u1=Object.assign([],this.state.users);
    //     u1.splice(id,1);
    //     this.setState({users:u1})
    // }

    render() {

        var mystyle = {
            color: 'white',

        }
        var mystyle1 = {
            bgcolor: 'Red'
        }

        return (
            <div class="main">
                <div class="container">
                    <div class="panel panel-primary">
                        <span class="panel-heading">
                            <h3 class="panel-title" class="bg-info text-white" style={mystyle} >Customer Registration Form</h3>
                        </span>



                        <form onSubmit={this.handleSubmit} >
                            <div class="form-group">
                                <label >Username</label>
                                <input type="text" value={this.state.value} onChange={this.handleChange} title="Enter Username" placeholder="Username" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label >Email Id</label>
                                <input type="text" value={this.state.value2} onChange={this.handleChange} title="Enter Email id" placeholder="Email id" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label >Mobile Number</label>
                                <input type="text" value={this.state.value3} onChange={this.handleChange} title="Enter Mobile Number" placeholder="Mobile Number" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label >Address</label>
                                <input type="text" value={this.state.value4} onChange={this.handleChange} title="Enter Address" placeholder="Address" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label >Purpose of Visit</label>
                                <input type="text" value={this.state.value5} onChange={this.handleChange} title="Enter Username" placeholder="Username" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label >Date Of Visit</label>
                                <input type="text" value={this.state.value6} onChange={this.handleChange} title="Enter Date Of Visit" placeholder="Date Of Visit" class="form-control" />
                            </div>

                            <input type="submit" className="btn btn-success" value="Log in" />
                            <table>
                                <tr border="2">
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Action</th>


                                </tr>
                                <tr>
                                    <td>{this.state.value}</td>
                                    <td>{this.state.value2}</td>
                                    <td>{this.state.value3}</td>
                                    <td>{this.state.value4}</td>
                                    <td>{this.state.value5}</td>
                                    <td>{this.state.value6}</td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
