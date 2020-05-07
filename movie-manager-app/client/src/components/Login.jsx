import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    //handle Login/submit button
    handleSubmission = async(event) => {
        event.preventDefault();
        //sanity
        // console.log(this.state)
        // object to pass in the body
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        //fetch endpoint to Login user
        let response = await fetch('/users/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(user)
        });
        let json = await response.json();
        // //sanity
        // console.log(`LOGIN ${JSON.stringify(json)}`);
        //check for an error
        if(json.error){
            window.alert(json.error)
        } else {
            //else log response
            console.log(`LOGIN ${json.token}`)

            //callback function to pass up token to AppContainer in order to authorize other components
            this.props.logInUser(json.token);
        }
        
    }

    render() {
        
        return (
            <div>
                <h2>Login</h2>
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name='email' id='email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <br />
                        <button onClick={this.handleSubmission}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;