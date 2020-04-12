import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Aspirations from './Aspirations';
import Fears from './Fears';
import HappyJoys from './HappyJoys';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            birthDate: '',
            gender: '',
        }
    }

    render() {
        return (
            <div className='appContainer'>
                <div className='mainDisplay'>
                    <p className='welcomeSign'>Welcome</p>
                    <form action="">
                        <label htmlFor="name" className='inputLabel'>Name</label>
                        <br />
                        <input type="text" name='name' id='name' value={this.state.userName} />
                        <br />
                        <br />
                        <label htmlFor="date" className='inputLabel'>Date of Birth</label>
                        <br />
                        <input type="date" name='date' id='date' value={this.state.birthDate} />
                        <br />
                        <br />
                        <label htmlFor="gender" className='inputLabel'>Male</label>
                        <br />
                        <input type="radio" />
                        <br />
                        <label htmlFor="gender" className='inputLabel'>Female</label>
                        <br />
                        <input type="radio" />
                    </form>
                    <h1 className='knowYourself'>Get To Know Yourself!</h1>
                    <Router>
                        <Link to='/aspirations' className='links'>Aspirations</Link>
                        <Link to='/fears' className='links'>Fears</Link>
                        <Link to='/happyjoys' className='links'>Happy Happy Joy Joys</Link>

                        <Route path='/aspirations'>
                            <Aspirations />
                        </Route>
                        <Route path='/fears'>
                            <Fears />
                        </Route>
                        <Route path='/happyjoys'>
                            <HappyJoys />
                        </Route>
                    </Router>
                </div>

            </div>
        )
    }


}

export default AppContainer;