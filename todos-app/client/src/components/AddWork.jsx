import React, { Component } from 'react';

class AddWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workDate:'',
            workTask:'',
            workDueDate:'',
        }
    }

    handleInputs = (event) => {
        if(event.target.name==='workDate'){
            this.setState({workDate:event.target.value})
        } else if(event.target.name==='workTask'){
            this.setState({workTask:event.target.value})
        } else if(event.target.name==='workDueDate'){
            this.setState({workDueDate:event.target.value})
        }
    }

    handleSubmission = async(event) => {
        event.preventDefault();
        let formData ={
            workDate:this.state.workDate,
            workTask:this.state.workTask,
            workDueDate:this.state.workDate
        };
        //fetch method to add work route
        let response = await fetch('/api/work',{
            method:'POST',
            headers:{
                'Accept':"application/json",
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        let json = await response.json();

        console.log(`Created ${json}`)
    }

    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <label htmlFor="workDate">Date: </label>
                        <input type="date" name='workDate' id='workDate' value={this.state.workDate} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <label htmlFor="workTask">Task: </label>
                        <input type="text" name='workTask' id='workTask' value={this.state.workTask} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <label htmlFor="workDueDate">Date: </label>
                        <input type="date" name='workDueDate' id='workDueDate' value={this.state.workDueDate} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <br/>
                        <button onClick={this.handleSubmission}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddWork;