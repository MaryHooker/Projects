import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class ForThem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Router>
                    <Link path='/forThemToWatch'>For Them To Watch</Link>
                </Router>
            </div>
         );
    }
}
 
export default ForThem;