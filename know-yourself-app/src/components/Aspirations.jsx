import React,{Component} from 'react';
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
// import AppContainer from './AppContainer';

class Aspirations extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                {/* <Router>
                    <Link to='/home'>Home</Link>
                    <Route path='/home'>
                        <AppContainer/>
                    </Route>
                </Router> */}
                <h1>What are your dreams in life?</h1>
                <h2>Aspirations Form</h2>
            </div>
        )
    }
}

export default Aspirations;