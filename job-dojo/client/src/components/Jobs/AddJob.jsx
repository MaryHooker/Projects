import React, { Component } from 'react';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      description: "",
      website: "",
    }
  }

  //sanity
  componentDidMount() {
    console.log('Adding new job!');
  }

  //function to update input fields in state
  handleChanges = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
    //sanity
    console.log(`Updating input fields ${JSON.stringify(this.state)}`)
  }

  render() {
    return (
      <div>
                <form action="">
                    <br/>
                    <div>
                        <label htmlFor="company">Company: </label>
                        <br/>
                        <input type="text" id="company" name="company" onChange={this.handleChanges} value={this.state.company}/>
                    </div>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <br/>
                        <input type="text" id="title" name="title" onChange={this.handleChanges} value={this.state.title}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <br/>
                        <textarea name="description" cols="30" rows="10" id="description" name="description" onChange={this.handleChanges} value={this.state.description}/>
                    </div>
                    <div>
                        <label htmlFor="website">Website: </label>
                        <br/>
                        <input type="text" id="website" name="website" onChange={this.handleChanges} value={this.state.website}/>
                    </div>
                    <div>
                        <button onClick={this.handleSubmission}>Submit</button>
                    </div>
                </form>
            </div>
      );
  }}

export default AddJob;