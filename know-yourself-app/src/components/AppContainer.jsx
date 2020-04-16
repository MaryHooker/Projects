import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import Welcome from './Welcome';
import {Button} from 'react-bootstrap';
import Aspirations from './Aspirations';
import Fears from './Fears';
import HappyJoys from './HappyJoys';
import {Animated} from "react-animated-css";



class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            birthDate:'',
            userEmail:'',
            //If getStartedForm is true-display form/if false- keep initial welcome and button
            getStartedForm: false,
            //If home is true-display 3 links
            allLinks:false,
        }
    }

    //handle form inputs and update value of state
    handleInputs = (event) =>{
        if(event.target.name==='userName'){
            this.setState({userName:event.target.value})
        } else if(event.target.name==='birthDate'){
            this.setState({birthDate:event.target.value})
        } else if(event.target.name==='userEmail'){
            this.setState({userEmail:event.target.value})
        }

        
    }

    //handle Lets Get Started Button
    handleSubmission = (event) => {
        event.preventDefault();

        this.setState(
            {
                getStartedForm: true
            }
        )
    }

    //handle submit button inside initial form
    handleFormSubmission = (event) =>{
        event.preventDefault();

        this.setState(
            {
                home:true
            }
        )

        this.setState(
            {
                getStartedForm:false
            }
        )
        //sanity
        console.log(this.state)
    }

    render() {
        let displayed =
      
            <div className='mainDisplay'>
                   <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <p className='welcomeSign'>Welcome</p>
                <Button onClick={this.handleSubmission} variant='success' className='openingButton'>Let's Get Started!</Button>
                </Animated>
            </div>
           

        if (this.state.getStartedForm) {
            displayed =  <div className='formContainer'>
              
            <form action="" className='formPosition'>
                <label htmlFor="name" className='inputLabel'>Name</label>
                <br />
                <input type="text" name='userName' id='name' value={this.state.userName} onChange={this.handleInputs} />
                <br />
                <br />
                <label htmlFor="date" className='inputLabel'>Date of Birth</label>
                <br />
                <input type="date" name='birthDate' id='date' value={this.state.birthDate} onChange={this.handleInputs} />
                <br />
                <br />
                <label htmlFor="email" className='inputLabel'>Email</label>
                <br/>
                <input type="email" name='userEmail' id='email' value={this.state.email} onChange={this.handleInputs}/>
                <br/>
                <br/>
                <br/>
                <Button onClick={this.handleFormSubmission} variant='success' className='submitButton'>Submit</Button>
            </form>
          
            </div>
        } else if(this.state.home){
            displayed =   <div>
              
            <h1 className='knowYourself'>Get To Know Yourself!</h1>
            <Router>
                    <Link to='/'></Link>
                    <Link to='/aspirations' className='links'>Aspirations</Link>
                    <Link to='/fears' className='links'>Fears</Link>
                    <Link to='/happyjoys' className='links'>Happy Happy Joy Joys</Link>
                    <Switch>
                       
                    <Route path='/aspirations'>
                        <Aspirations/>
                    </Route>
                    <Route path='/fears'>
                        <Fears />
                    </Route>
                    <Route path='/happyjoys'>
                        <HappyJoys />
                    </Route>
                    </Switch>
                </Router>
              
        </div>
        }
        return (
            <div className='appContainer'>
               
                {displayed}
               
            </div>
        )
    }


}

export default AppContainer;