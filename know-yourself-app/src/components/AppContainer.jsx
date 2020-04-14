import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';


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
                <button onClick={this.handleSubmission}>Let's Get Started!</button>
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