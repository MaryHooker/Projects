import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Personal from './Personal';
import Banking from './Banking';
import Identity from './Identity';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
              
                    <Link to='/personal' className='noLine'><span>Personal</span></Link>
                    <Link to='/banking' className='noLine'><span>Banking</span></Link> 
                    <Link to='/identity' className='noLine'><span>Identity</span></Link>
           
                    <Route path='/personal' exact component={() => <Personal />} />
                    <Route path='/banking' exact component={() => <Banking />} />
                    <Route path='/identity' exact component={() => <Identity />} />
                </Router>
            </div>
        );
    }
}

export default AppContainer;