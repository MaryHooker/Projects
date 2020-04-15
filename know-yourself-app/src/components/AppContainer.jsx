import React, { Component } from 'react';
import Welcome from './Welcome';
import {Button} from 'react-bootstrap';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // summitted: false,
            //Display form
            //If welcome is true-display form/if false- keep initial welcome and button
            welcome: false,
        }
    }

    // handleInputs = (event) =>{

    // }

    handleSubmission = (event) => {
        event.preventDefault();

        this.setState(
            {
                welcome: true
            }
        )
    }

    render() {
        let displayed =
            <div className='mainDisplay'>
                <p className='welcomeSign'>Welcome</p>
                <Button onClick={this.handleSubmission} variant='success' className='openingButton'>Let's Get Started!</Button>
            </div>

        if (this.state.welcome) {
            displayed = <Welcome />
        }
        return (
            <div className='appContainer'>
                {displayed}
            </div>
        )
    }


}

export default AppContainer;