import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import ForMe from './ForMe';
import ForThem from './ForThem';
import ForThemToWatch from './ForThemToWatch';
import ForMeToWatch from './ForMeToWatch';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MovieForm from './MovieForm';
import ForWhoForm from './ForWhoForm';
import MyFavorites from './MyFavorites';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //hold token passed up from Login to use for other components
            token: "",
            //from payload
            tokenUser: {},
            loggingIn: false,
        }
    }
    //Call Back function for Login component to send up Token to authorize use for other components
    //Pull in payload with verified token
    logInUser = async (token) => {
        //place recieved token in state
        this.setState(
            {
                token: token
            }
        )
        //Fetch method to verify token and send payload
        let response = await fetch(`/users/jwtpayload`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': this.state.token
            }
        });

        let json = await response.json();

        //check for errors
        if (json.error) {
            //reset state of payload to empty to avoid saving anything thats not wanted
            this.setState({ token: {} })
            //alert user of error
            window.alert(json.error)
        }// Else put the payload response up in state//in object so use object notation to get to wanted data
        else {
            this.setState({ tokenUser: json.message })
            //sanity
            console.log(this.state.tokenUser)
        }

        //sanity
        console.log(`PARENT ${JSON.stringify(this.state.token)}`)
    }

    render() {
        return (
            <div>
                <h1>Movie List Manager</h1>
                <Router>
                    <Link to='/'>Home</Link>
                    <br/>
                    {/* Links */}
                    <Link to='/register'>Register</Link> |
                    <Link to='/login'>Login</Link> |
                    <br />
                    <Link to='/forMe'>For Me</Link> |
                    <Link to='/forThem'>For Them</Link>
                    {/* Routes */}
                    <Route path='/login' component={() => <Login logInUser={this.logInUser} />} />
                    <Route path='/register' component={() => <Register />} />
                    {/* For Me */}
                    <Route path='/forMe' component={() => <ForMe token={this.state.token} />} />
                    <Route path='/forMeToWatch' component={() => <ForMeToWatch />} />
                    <Route path='/myFavorites' component={() => <MyFavorites token={this.props.token} />} />

                    {/* For Them */}
                    <Route path='/forThem' component={() => <ForThem />} />
                    <Route path='/forThemToWatch' component={() => <ForThemToWatch />} />
                    <Route path='/movieForm' component={() => <MovieForm />} />
                    <Route path='/forWhoForm' component={() => <ForWhoForm />} />

                </Router>
            </div>
        );
    }
}

export default AppContainer;