import React, { Component } from 'react';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      jobDescription: "",
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
    // console.log(`Updating input fields ${JSON.stringify(this.state)}`)
  }

   // handle submission/ fetch method to add a new job to the database
   handleSubmission = async (event) => {
       event.preventDefault();
       //new job to be submitted
       const newJob = {
        company: this.state.company,
        title: this.state.title,
        jobDescription: this.state.jobDescription,
        website: this.state.website,
       };
       //fetch method
       const response = await fetch(`/api/jobs`, {
           method:"POST",
           headers:{
               "Content-Type": "application/json",
               "Accept" : "application/json"
           },
           body: JSON.stringify(newJob)
       });
       //place response in json format
       const json = await response.json();
       //sanity
       console.log(json)

       //RESET FORM
       this.setState(
           {
            company: "",
            title: "",
            jobDescription: "",
            website: "",
           }
       )

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
                        <label htmlFor="jobDescription">Description: </label>
                        <br/>
                        <textarea name="jobDescription" cols="30" rows="10" id="jobDescription" name="jobDescription" onChange={this.handleChanges} value={this.state.jobDescription}/>
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