import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ForMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    render() { 
        return ( 
            <div>
                    <h4>For Me</h4>
                    <Link to='/myFavorites'>My Favorites</Link> | 
                    <Link to='/forMeToWatch'>To Watch</Link>

            </div>
         );
    }
}
 
export default ForMe;