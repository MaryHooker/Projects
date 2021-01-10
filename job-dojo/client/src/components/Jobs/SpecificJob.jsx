import React,{Component} from 'react';

class SpecificJob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            job:{},
         }
    }

    //When component mounts, run inner function
    componentDidMount(){
        this.jobDetails();
    }

    //Function to run fetch method in order to view specific link to update or delete
    jobDetails = async() => {
        let response = await fetch(`/api/jobs/${this.props.match.params.company}`, {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        //place response in json format
        let json = await response.json();
        //sanity
        console.log(json)
    }

    render() { 
        return ( 
            <div>
                <h3>Reading One Job!</h3>
            </div>
         );
    }
}
 
export default SpecificJob;