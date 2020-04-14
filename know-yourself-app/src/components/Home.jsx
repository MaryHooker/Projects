import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import React,{Component} from 'react';
import Aspirations from './Aspirations';
import Fears from './Fears';
import HappyJoys from './HappyJoys';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
               
                <h1 className='knowYourself'>Get To Know Yourself!</h1>
                <Router>
                        <Link to='/'></Link>
                        <Link to='/aspirations' className='links'>Aspirations</Link>
                        <Link to='/fears' className='links'>Fears</Link>
                        <Link to='/happyjoys' className='links'>Happy Happy Joy Joys</Link>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                        <Route path='/aspirations'>
                            <Aspirations />
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
        );
    }
}

export default Home;