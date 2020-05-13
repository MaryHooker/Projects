import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ViewPersonalTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDate: "",
            personalTask: "",
        }
    }

    //run fetch when component mounts
    componentDidMount(){
        this.loadData();
    }

    //fetch endpoint to view One Personal task by date
    loadData = async() => {
        let personalDate = this.props.match.params.personalDate;
        let response = await fetch(`/api/personal/${personalDate}`);
        //extract json
        let json = await response.json();
        //sanity
        console.log(json);
        //set in state
        this.setState(
            {
                personalDate:json.personalDate,
                personalTask:json.personalTask
            }
        )
    }

    render() {
        return (
            <div>
                <p>Date: {this.state.personalDate}</p>
                <p>Task: {this.state.personalTask}</p>
                <Link to={`/update/personal/${this.state.personalDate}`}><button>Edit</button> </Link> <button>Delete</button>
            </div>
        );
    }
}

export default ViewPersonalTask;