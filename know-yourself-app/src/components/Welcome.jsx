import React, { Component } from 'react';
import Home from './Home';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            birthDate: '',
            gender: '',
            home:false,
        }
    }
    
    handleSubmission = (event)=>{
        event.preventDefault();

        this.setState(
            {
                home:true
            }
        )
    }
    render() {
        // let display;
        // if(this.state.home){
        //    display = <Home/>
        // }
        return (
            <div>
                 
                <form action="">
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
                    <input type="radio" />
                    <br />
                    <label htmlFor="gender" className='inputLabel'>Female</label>
                    <br />
                    <input type="radio" />
                    <br />
                    <br />
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
                {/* {display} */}
            </div>
        );
    }
}

export default Welcome;