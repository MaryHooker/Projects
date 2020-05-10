import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ViewWorkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDate: "",
            workTask: "",
            workDueDate: "",
        }
    }

    //run fetch method when component mounts
    componentDidMount(){
        this.loadData();
    }

    //Fetch method to View One Work Task
    loadData = async() => {
        let workDate = this.props.match.params.workDate;
        let response = await fetch(`/api/work/${workDate}`)
        let json = await response.json();
        //sanity
        // console.log(json)
        this.setState(
            {
                workDate: json.workDate,
                workTask:json.workTask,
                workDueDate: json.workDueDate
            }
        )
    }
    render() {
        return (
            <div>
                <p>Date: {this.state.workDate}</p>
                <p>Task: {this.state.workTask}</p>
                <p>Due Date: {this.state.workDueDate}</p>
                <Link to={`/update/work/${this.state.workDate}`}><button>Edit</button> </Link> <button>Delete</button>
            </div>
        );
    }
}

export default ViewWorkTask;