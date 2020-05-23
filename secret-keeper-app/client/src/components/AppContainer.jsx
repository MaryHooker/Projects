import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Personal from './Personal';
import Banking from './Banking';
import Identity from './Identity';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secretPage: '',
          
        }
    }

    openPage = (event) => {
        if (event.target.name === 'Personal') {
            this.setState({
                secretPage: event.target.value
            })
        } else if (event.target.name === 'Banking') {
            this.setState({
                secretPage: event.target.value
            })
        } else if (event.target.name === 'Identity') {
            this.setState({
                secretPage: event.target.value
            })
        }
    }

    render() {
        let display;
        if (this.state.secretPage==='Personal') {
            display =
                <div>
                    <Personal />
                </div>
        } else if (this.state.secretPage==='Banking') {
            display =
                <div>
                    <Banking />
                </div>
        } else if (this.state.secretPage==='Identity') {
            display =
                <div>
                    <Identity />
                </div>
        }
        return (
            <div>
                <h1>Secret Keeper</h1>
                <Router>
                    <select name="secrets" id="secrets" onChange={this.openPage} value={this.state.secretPage}>
                        <option value="" >Which Secrets</option>
                        <option value="Personal">Personal</option>
                        <option value="Banking">Banking</option>
                        <option value="Identity" >Identity</option>
                    </select>
                    <div>
                        {display}
                    </div>
                    {/* <Route path='/personal' exact component={() => <Personal />} />
                    <Route path='/banking' exact component={() => <Banking />} />
                    <Route path='/identity' exact component={() => <Identity />} /> */}
                </Router>
            </div>
        );
    }
}

export default AppContainer;