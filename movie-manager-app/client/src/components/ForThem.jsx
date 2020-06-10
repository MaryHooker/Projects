import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ForThem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <h3>For Them</h3>
                    {/* <Link to='/forThemToWatch'>For Them To Watch</Link> */}
                    <Link to='/movieForm'>Create Movie</Link> | 
                    <Link to='/forWhoForm'>Add For Who</Link>
            </div>
         );
    }
}
 
export default ForThem;