import React,{Component} from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }

    render() { 
        return ( 
            <div>
            <div>
                <h2>Hook</h2>
                <img src="/hook.jpg" alt="hook" className='hookImage'/>
                <p className='textCenter'>When his young children are abducted by his old nemesis, Capt. Hook (Dustin Hoffman), middle-aged lawyer Peter Banning (Robin Williams) returns to his magical origins as Peter Pan.</p>
            </div>
            </div>
         );
    }
}
 
export default Movie;