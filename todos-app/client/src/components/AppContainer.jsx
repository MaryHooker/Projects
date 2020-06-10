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
                    <div>

                        <div className='mainTitle'>
                            <h1>To Do's</h1>
                        </div>
                        <div className='homeLink'>
                            <Link to='/' className='homeTitle'>Home</Link>
                          
                        </div>
                        <br/>
                    </div>

                    <div className='appContainer'>

                        {/* Links */}

                        <Link to='/work' className='workTitle'>Work</Link>  
                        <Link to='/personal' className='personalTitle'>Personal</Link> 
                        <Link to='/bills' className='billsTitle'>Bills</Link>  

                        {/* Routes */}

                        {/*////// WORK //////// */}
                        <div className='workLink'>
                            <Route exact path='/addWork' component={AddWork} />
                            <Route exact path='/work' component={WorkToDos} />
                            <div>
                                <Route path='/workdetails/:workDate' component={ViewWorkTask} />
                                <Route path='/update/work/:workDate' component={EditWorkTask} />
                            </div>
                        </div>
                        {/* /////// PERSONAL ////////*/}
                        <div className='personalLink'>
                            <Route exact path='/addPersonal' component={AddPersonal} />
                            <Route exact path='/personal' component={PersonalToDos} />
                            <div>
                                <Route path='/personaldetails/:personalDate' component={ViewPersonalTask} />
                                <Route path='/update/personal/:personalDate' component={EditPersonalTask} />
                            </div>
                        </div>
                        {/*/////// BILLS //////// */}
                        <div className='billLink'>
                            <Route exact path='/addBill' component={AddBill} />
                            <Route exact path='/bills' component={BillToDos} />
                            <div>
                                <Route path='/billdetails/:bill' component={ViewBillTask} />
                                <Route path='/update/bill/:bill' component={EditBill} />
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppContainer;