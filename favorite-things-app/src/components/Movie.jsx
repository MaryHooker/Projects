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
                <p>When his young children are abducted by his old nemesis, Capt. Hook (Dustin Hoffman), middle-aged lawyer Peter Banning (Robin Williams) returns to his magical origins as Peter Pan. Peter must revisit a foggy past in which he abandoned Neverland for family life, leaving Tinkerbell (Julia Roberts) and the Lost Boys to fend for themselves. Given their bitterness toward Peter for growing up -- and their allegiance to their new leader, Rufio -- the old gang may not be happy to see him.</p>
            </div>
         );
    }
}
 
export default Movie;