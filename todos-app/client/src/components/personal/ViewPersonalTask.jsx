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

    //Fetch delete method from server
    deleteTask = async() => {
        let response = await fetch(`/api/personal/${this.state.personalDate}`,{
            method:'DELETE'
        })
        let json = await response.json();
        //sanity
        console.log(json)

        //brute force redirect
        window.location='/personal'
    } 

    render() {
        return (
            <div>
                <br/>
                <h4 className='specificTitle'>Personal</h4>
                <p><span>Date:</span> {this.state.personalDate}</p>
                <p><span>Task:</span> {this.state.personalTask}</p>
                <Link to={`/update/personal/${this.state.personalDate}`}><button>Edit</button> </Link> <button onClick={this.deleteTask}>Delete</button>
            </div>
        );
    }
}

export default ViewPersonalTask;