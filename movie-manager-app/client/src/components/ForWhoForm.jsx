import React, { Component } from 'react';

class ForWhoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
        }
    }

    // handle inputs
    handleChange = (event) => {
        if(event.target.name ==="name"){
            this.setState({name:event.target.value})
        }
    }

    // fetch method to create a movie and push into ForWho movie array
    handleSubmission = async (event) => {
        event.preventDefault();

        let newForWho = {
            name:this.state.name
        }
        let response = await fetch(`/api/ForWho`,{
            method:"post",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newForWho)
        })
        let json = await response.json();
        //sanity
        console.log(json)
    }

    render() {
        return (
            <div>
                <h5>For Who Form</h5>
                <form action="">

                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" value={this.state.name} name="name" id='name' onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ForWhoForm;