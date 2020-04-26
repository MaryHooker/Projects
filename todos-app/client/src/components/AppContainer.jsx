import React, { Component } from 'react';
import WorkToDos from './WorkToDos';
import PersonalToDos from './PersonalToDos';
import BillToDos from './BillToDos';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <Router>
                    <Link to='/'>Home</Link>
                    <h1>To Do's</h1>
                    <div className='appContainer'>
                        <div>
                            <Link to='/work'>Work</Link>
                            <Route exact path='/work' component={WorkToDos} />
                        </div>
                        <div>
                            <Link to='/personal'>Personal</Link>
                            <Route exact path='/personal' component={PersonalToDos} />
                        </div>
                        <div>
                            <Link to='/bills'>Bills</Link>
                            <Route exact path='/bills' component={BillToDos} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppContainer;