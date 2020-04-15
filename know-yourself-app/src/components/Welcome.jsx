import React, { Component } from 'react';
import Home from './Home';
import {Button} from 'react-bootstrap';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            birthDate: '',
            gender: '',
            //if true display links
            home: false,
        }
    }

    handleInputs = (event) =>{
        if(event.target.name==='name'){
            this.setState(
                {
                    userName:event.target.value
                }
            )
        } else if(event.target.name==='date'){
            this.setState(
                {
                    birthDate:event.target.value
                }
            )
        } else if(event.target.name==='gender'){
            this.setState(
                {
                    gender:event.target.gender
                }
            )
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();

        this.setState(
            {
                home: true
            }
        )
        //sanity
        console.table(this.state);
    }

    render() {
        let display = 
        <div className='formContainer'>
            <form action="" className='formPosition'>
                <label htmlFor="name" className='inputLabel'>Name</label>
                <br />
                <input type="text" name='name' id='name' value={this.state.userName} onChange={this.handleInputs} />
                <br />
                <br />
                <label htmlFor="date" className='inputLabel'>Date of Birth</label>
                <br />
                <input type="date" name='date' id='date' value={this.state.birthDate} onChange={this.handleInputs} />
                <br />
                <br />
                <label htmlFor="gender" className='inputLabel'>Male</label>
                <br />
                <input type="radio" name='name' checked={this.state.gender}/>
                <br />
                <label htmlFor="gender" className='inputLabel'>Female</label>
                <br />
                <input type="radio" name='name' checked={this.state.gender}/>
                <br />
                <br />
                <Button onClick={this.handleSubmission} variant='success' className='submitButton'>Submit</Button>
            </form>
            </div>
    
        if (this.state.home) {
            display = <Home />
        }
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default Welcome;