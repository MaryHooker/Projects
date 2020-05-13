import React, { Component } from 'react';
import WorkToDos from './work/WorkToDos';
import PersonalToDos from './personal/PersonalToDos';
import BillToDos from './bills/BillToDos';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddWork from './work/AddWork';
import AddPersonal from './personal/AddPersonal';
import AddBill from './bills/AddBill';
import { Button } from 'react-bootstrap';
import ViewBillTask from './bills/ViewBillTask';
import ViewPersonalTask from './personal/ViewPersonalTask';
import ViewWorkTask from './work/ViewWorkTask';
import EditWorkTask from './work/EditWorkTask';
import EditPersonalTask from './personal/EditPersonalTask';
import EditBill from './bills/EditBill';

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
                        {/* WORK/////////////////////////////////////////////// */}
                        <div className='workLink'>
                            <Link to='/work'>Work</Link>
                            <br/>
                            <Button variant='warning'><Link to='/addWork'>Add Work Task</Link></Button>
                            <Route exact path='/addWork' component={AddWork}/>
                            <br/>
                            <Route exact path='/work' component={WorkToDos} />
                            <br/>
                            <div>
                                <Route path='/workdetails/:workDate' component ={ViewWorkTask}/>
                                <Route path='/update/work/:workDate' component = {EditWorkTask}/>
                            </div>
                        </div>
                        {/* PERSONAL////////////////////////////////////////////// */}
                        <div className='personalLink'>
                            <Link to='/personal'>Personal</Link>
                            <br/>
                            <Button variant='warning'><Link to='/addPersonal'>Add Personal Task</Link></Button>
                            <Route exact path='/addPersonal' component={AddPersonal}/>
                            <br/>
                            <Route exact path='/personal' component={PersonalToDos} />
                            <br/>
                            <div>
                                <Route path='/personaldetails/:personalDate' component={ViewPersonalTask}/>
                                <Route path='/update/personal/:personalDate' component ={EditPersonalTask}/>
                            </div>
                        </div>
                        {/* BILLS//////////////////////////////////////////////////// */}
                        <div className='billLink'>
                            <Link to='/bills'>Bills</Link>
                            <br/>
                            <Button variant='warning'><Link to='/addBill'>Add Bill</Link></Button>
                            <Route exact path='/addBill' component={AddBill}/>
                            <br/>
                            <Route exact path='/bills' component={BillToDos} />
                            <br/>
                            <div>
                                <Route path='/billdetails/:bill' component={ViewBillTask}/>
                                <Route path='/update/bill/:bill' component ={EditBill}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppContainer;