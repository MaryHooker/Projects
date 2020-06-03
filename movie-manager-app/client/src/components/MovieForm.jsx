import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle:"",
            details:"",
        }
    } 

    // handle inputs
    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // fetch method to create a movie and push into ForWho movie array
    handleSubmission = async(event) => {
        event.preventDefault();

        // let response = await fetch(`/api/movies/ForWho/${this.state.name}`)
    }

    render() {
        return (
            <div>
                <h5>Movie Form</h5>
                <form action="">
                   
                    <div>
                    <label htmlFor="movieTitle">Title: </label>
                        <input type="text" value={this.state.movieTitle} name="movieTitle" onChange={this.handleChanges} />
                    </div>
                    <div>
                    <label htmlFor="details">Details: </label>
                        <input type="text" value={this.state.details} name="details" onChange={this.handleChanges} />
                    </div>
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MovieForm;