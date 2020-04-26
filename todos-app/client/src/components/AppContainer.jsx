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

                    <div className='appContainer'>
                        <div className='homeLink'>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className='mainTitle'>
                        <h1>To Do's</h1>
                        </div>
                        <div className='workLink'>
                            <Link to='/work'>Work</Link>
                            <Route exact path='/work' component={WorkToDos} />
                        </div>
                        <div className='personalLink'>
                            <Link to='/personal'>Personal</Link>
                            <Route exact path='/personal' component={PersonalToDos} />
                        </div>
                        <div className='billLink'>
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