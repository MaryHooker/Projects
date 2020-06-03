import React, { Component } from 'react';

class ForWhoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
        }
    }

    // handle inputs
    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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
                        <label htmlFor="movieTitle">Name: </label>
                        <input type="text" value={this.state.movieTitle} name="movieTitle" onChange={this.handleChanges} />
                    </div>
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ForWhoForm;