import React, { Component } from 'react';

class EditPersonalTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDate:"",
            personalTask:"",
        }
    }

    componentDidMount() {
        this.loadData();
    }

    //get one document from collection
    loadData = async () => {
        let response = await fetch(`api/personal/${this.props.match.params.personalDate}`);
        let json = await response.json();
        this.setState({
            personalDate: json.personalDate,
            personalTask: json.personalTask,
            
        })
        console.log(`Edit ${JSON.stringify(this.state)}`)
    }

    handleInputs = (event) => {
        if (event.target.name === 'personalDate') {
            this.setState({ personalDate: event.target.value })
        } else if (event.target.name === 'personalTask') {
            this.setState({ personalTask: event.target.value })
        } 
    }

    handleSubmission = async (event) => {
        event.preventDefault();
        // object for form submission
        let formSubmission = {
            personalDate: this.state.personalDate,
            personalTask: this.state.personalTask,
           
        }

        // fetch put endpoint with query params
        let response = await fetch(`/api/personal/${this.props.match.params.personalDate}`, {
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
                        <label htmlFor="personalDate">Date: </label>
                        <input type="date" name='personalDate' id='personalDate' value={this.state.personalDate} onChange={this.handleInputs} />
                    </div>
                    <div>
                        <label htmlFor="personalTask">Task: </label>
                        <input type="text" name='personalTask' id='personalTask' value={this.state.personalTask} onChange={this.handleInputs} />
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

export default EditPersonalTask;