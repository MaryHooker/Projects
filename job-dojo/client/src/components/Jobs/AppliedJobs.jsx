import React,{Component} from 'react';

class AppliedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            appliedJobs:[],
         }
    }

    componentDidMount(){
        this.loadAllJobs();
    }

    loadAllJobs = async() => {
        let response = await fetch(`/api/jobs`,{
            method:"GET"
        })
        let json = await response.json();
        //sanity
        console.table(json);
    }


    render() { 
        return ( <div>
            <h3>Viewing all Applied Jobs</h3>
        </div> );
    }
}
 
export default AppliedJobs;