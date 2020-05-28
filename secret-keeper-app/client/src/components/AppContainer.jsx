import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Personal from './Personal';
import Banking from './Banking';
import Identity from './Identity';
import Login from './Login';
import Register from './Register';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:"",
            tokenUser:[],
        }
    }

    getToken = async (token) => {
        this.setState({
            token: token
        })
        console.log(this.state);
        const response = await fetch('/users/verify', {
            method: "POST",
            headers: {
                "Authorization": this.state.token
            }
        });
        const json = await response.json();
        if (json.error) {
            // window.alert(json.error);
        } else {
            this.setState({
                tokenUser: {
                    id: json.message.id,
                    name: json.message.name,
                    email: json.message.email,

                },

            });
            console.log(this.state.tokenUser);
        }
    }

    render() {

        return (
            <div>
                <Router>
                    <div className='homeMargin'>
                        <Link to='/' className='homeLink'>Home</Link>
                    </div>
                    <h1 className='pageTitle'>Secret Keeper</h1>
                    <div>
                        <Link to='/login' className='noLine'>Login</Link>
                        <Link to='/register' className='noLine'>Register</Link>
                        <br/>
                    </div>
                    <br/>
                    <Link to='/personal' className='noLine'><span>Personal</span></Link>
                    <Link to='/banking' className='noLine'><span>Banking</span></Link>
                    <Link to='/identity' className='noLine'><span>Identity</span></Link>

                    {/* Routes */}
                    <Route path='/login' exact component={() => <Login getToken={this.getToken}/>} />
                    <Route path='/register' exact component={() => <Register token={this.state.token}/>} />

                    <Route path='/personal' exact component={() => <Personal token={this.state.token}/>} />
                    <Route path='/banking' exact component={() => <Banking token={this.state.token}/>} />
                    <Route path='/identity' exact component={() => <Identity token={this.state.token}/>} />
                </Router>
            </div>
        );
    }
}

export default AppContainer;