import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email: "",
            password: "",
        }
    }

    //handle all changes to form fields inputs
    handleChange = (event) => {
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        )
    }


    //handle Register/submit button
    handleSubmission = async(event) => {
        event.preventDefault();
        //sanity
        // console.log(this.state)
        // object to pass in the body
        let newUser = {
            name:this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        //fetch endpoint to Register user
        let response = await fetch('/users/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        });
        //extract json response
        let json = await response.json();

        //check for an error
        if(json.error){
            window.alert(json.error);
        } else {
            //else log response
            console.log(`Register ${JSON.stringify(json)}`); 
        }
        
    }
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name='email' id='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <br />
                        <button onClick={this.handleSubmission}>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;