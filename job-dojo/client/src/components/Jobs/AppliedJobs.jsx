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
        //place received data in state
        this.setState(
            {
                appliedJobs:json
            }
        )
        //sanity
        console.log(`Applied Jobs state ${JSON.stringify(json)}`)

    }


    render() { 
        return ( 
        <div>
            <h3>Viewing all Applied Jobs</h3>
            <div>
            {
                this.state.appliedJobs.map((job) => {
                    return(
                        <div>
                            <p>Company: {job.company}</p>
                            <p>Title: {job.title}</p>
                            <p>Description: {job.jobDescription}</p>
                            <p>Website: {job.website}</p>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
        </div> 
        );
    }
}
 
export default AppliedJobs;