import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class WorkToDos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            workList:[],
         }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount(){
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async() => {
        let response = await fetch('/api/work');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                workList:json
            }
        )
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.workList.map((work)=>{
                        return(
                            <div key={work._id}>
                                <Link to={`/workdetails/${work.workDate}`}>
                                <p>Date: {work.workDate}</p>
                                </Link>
                                <p>Task: {work.workTask}</p>
                                <p>Due Date: {work.workDueDate}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default WorkToDos;