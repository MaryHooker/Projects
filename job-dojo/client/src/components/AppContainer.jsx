import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddJob from './Jobs/AddJob';
import AppliedJobs from './Jobs/AppliedJobs';
import DeleteJob from './Jobs/DeleteJob';
import SpecificJob from './Jobs/SpecificJob';
import UpdateJob from './Jobs/UpdateJob';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
            <h1>Job Dojo</h1>
            <Router>
                <Link to='/appliedJobs'>Applied Jobs</Link> | 
                <Link to='/addJob'>Add Job</Link> | 
                <Link to='/appliedJobs/:company'>View Specific Job</Link> | 
                <Link to='/appliedJobs/update/:company'>Update Specific Job</Link> |  
                <Link to='/appliedJobs/delete/:company'>Delete Specific Job</Link>  


                <Route path='/appliedJobs' exact component={() => <AppliedJobs/>}/>
                <Route path='/addJob' exact component={() => <AddJob/>}/>
                <Route path='/appliedJobs/:company' exact component={() => <SpecificJob/>}/>
                <Route path='/appliedJobs/update/:company' exact component={() => <UpdateJob/>}/>
                <Route path='/appliedJobs/delete/:company' exact component={() => <DeleteJob/>}/>


                </Router>
        </div>
        )
       
    }
}

export default AppContainer;