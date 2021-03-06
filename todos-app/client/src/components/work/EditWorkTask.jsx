import React, { Component } from 'react';

class EditWorkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDate:"",
            workTask:"",
            workDueDate:"",
        }
    }

    componentDidMount() {
        this.loadData();
    }

    //get one document from collection
    loadData = async () => {
        let response = await fetch(`api/work/${this.props.match.params.workDate}`);
        let json = await response.json();
        this.setState({
            workDate: json.workDate,
            workTask: json.workTask,
            workDueDate: json.workDueDate,
        })
        console.log(`Edit ${JSON.stringify(this.state)}`)
    }

    handleInputs = (event) => {
        if (event.target.name === 'workDate') {
            this.setState({ workDate: event.target.value })
        } else if (event.target.name === 'workTask') {
            this.setState({ workTask: event.target.value })
        } else if (event.target.name === 'workDueDate') {
            this.setState({ workDueDate: event.target.value })
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault();
        // object for form submission
        let formSubmission = {
            workDate: this.state.workDate,
            workTask: this.state.workTask,
            workDueDate: this.state.workDueDate,
        }

        // fetch put endpoint with query params
        let response = await fetch(`/api/work/${this.props.match.params.workDate}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // send form submission in request body
            body: JSON.stringify(formSubmission)
          
        });

        let json = await response.json();
        console.log(json); // check returned json data

    }
    render() {
        return (
            <div>
                <h3>Update</h3>
                <form action="">
                    <div>
                        <label htmlFor="workDate">Date: </label>
                        <input type="date" name='workDate' id='workDate' value={this.state.workDate} onChange={this.handleInputs} />
                    </div>
                    <div>
                        <label htmlFor="workTask">Task: </label>
                        <input type="text" name='workTask' id='workTask' value={this.state.workTask} onChange={this.handleInputs} />
                    </div>
                    <div>
                        <label htmlFor="workDueDate">Due Date: </label>
                        <input type="date" name='workDueDate' id='workDueDate' value={this.state.workDueDate} onChange={this.handleInputs} />
                    </div>
                    <div>
                        <br />
                        <button onClick={this.handleSubmission}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditWorkTask;