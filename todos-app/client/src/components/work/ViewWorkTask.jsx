import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    componentDidMount() {
        this.loadData();
    }

    //Fetch method to View One Work Task
    loadData = async () => {
        let workDate = this.props.match.params.workDate;
        let response = await fetch(`/api/work/${workDate}`)
        let json = await response.json();
        //sanity
        // console.log(json)
        this.setState(
            {
                workDate: json.workDate,
                workTask: json.workTask,
                workDueDate: json.workDueDate
            }
        )
    }

    //Fetch delete method from server
    deleteTask = async () => {
        let response = await fetch(`/api/work/${this.state.workDate}`, {
            method: 'DELETE'
        })
        let json = await response.json();
        //sanity
        console.log(json)

        //brute force redirect
        window.location = '/work'
    }

    render() {
        return (
            <div>
                <br />
                <h4 className='specificTitle'>Work</h4>
                <p><span>Date:</span> {this.state.workDate}</p>
                <p><span>Task:</span> {this.state.workTask}</p>
                <p><span>Due Date:</span> {this.state.workDueDate}</p>
                <Link to={`/update/work/${this.state.workDate}`}><button>Edit</button> </Link> <button onClick={this.deleteTask}>Delete</button>
            </div>
        );
    }
}

export default ViewWorkTask;