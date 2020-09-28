import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AppliedJobs from './AppliedJobs';

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
                <AppliedJobs/>
        </div>
        )
       
    }
}

export default AppContainer;