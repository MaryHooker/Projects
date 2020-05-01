import React, { Component } from 'react';
import WorkToDos from './WorkToDos';
import PersonalToDos from './PersonalToDos';
import BillToDos from './BillToDos';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddWork from './AddWork';
import AddPersonal from './AddPersonal';
import AddBill from './AddBill';
import { Button } from 'react-bootstrap';
import ViewBillTask from './ViewBillTask';
import ViewPersonalTask from './ViewPersonalTask';
import ViewWorkTask from './ViewWorkTask';

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
                            <br/>
                            <Button variant='success'><Link to='/addWork'>Add Work Task</Link></Button>
                            <Route exact path='/addWork' component={AddWork}/>
                            <br/>
                            <Route exact path='/work' component={WorkToDos} />
                            <br/>
                            <div>
                                <Route path='/workdetails/:workDate' component ={ViewWorkTask}/>
                            </div>
                        </div>
                        <div className='personalLink'>
                            <Link to='/personal'>Personal</Link>
                            <br/>
                            <Button variant='success'><Link to='/addPersonal'>Add Personal Task</Link></Button>
                            <Route exact path='/addPersonal' component={AddPersonal}/>
                            <br/>
                            <Route exact path='/personal' component={PersonalToDos} />
                            <br/>
                            <div>
                                <Route path='/personaldetails/:personalDate' component={ViewPersonalTask}/>
                            </div>
                        </div>
                        <div className='billLink'>
                            <Link to='/bills'>Bills</Link>
                            <br/>
                            <Button variant='success'><Link to='/addBill'>Add Bill</Link></Button>
                            <Route exact path='/addBill' component={AddBill}/>
                            <br/>
                            <Route exact path='/bills' component={BillToDos} />
                            <br/>
                            <div>
                                <Route path='/billdetails/:bill' component={ViewBillTask}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppContainer;