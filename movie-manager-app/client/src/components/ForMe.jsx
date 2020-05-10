import React,{Component} from 'react';
import MyFavorites from './MyFavorites';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class ForMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    render() { 
        return ( 
            <div>
                <Router>
                    
                    <Link path='/myFavorites'>My Favorites</Link> | 
                    <Link path='/forMeToWatch'>To Watch</Link>

                    <Route to='/myFavorites' component={() => <MyFavorites token={this.props.token} />} />
                </Router>
            </div>
         );
    }
}
 
export default ForMe;