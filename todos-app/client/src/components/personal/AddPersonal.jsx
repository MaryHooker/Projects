import React,{Component} from 'react';

class AddPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personalDate:'',
            personalTask:'',
         }
    }

    handleInputs = (event) => {
        if(event.target.name==='personalDate'){
            this.setState({personalDate:event.target.value})
        } else if(event.target.name==='personalTask'){
            this.setState({personalTask:event.target.value})
        } 
    }

    handleSubmission = async(event) => {
        event.preventDefault();
        let formData ={
            personalDate:this.state.personalDate,
            personalTask:this.state.personalTask
        };
        //fetch method to add work route
        let response = await fetch('/api/personal',{
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
                        <label htmlFor="personalDate">Date: </label>
                        <input type="date" name='personalDate' id='personalDate' value={this.state.personalDate} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <label htmlFor="personalTask">Task: </label>
                        <input type="text" name='personalTask' id='personalTask' value={this.state.personalTask} onChange={this.handleInputs}/>
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
 
export default AddPersonal;