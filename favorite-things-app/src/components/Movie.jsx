import React,{Component} from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>Hook</h2>
                <img src="https://am22.mediaite.com/tms/cnt/uploads/2020/03/hook-1200x675.jpg" alt="hook" className='hookImage'/>
            </div>
         );
    }
}
 
export default Movie;