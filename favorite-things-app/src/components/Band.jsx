import React,{Component} from 'react';

class Band extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>The Cranberries</h2>
                <img src="/cranberries.jpg" alt="cranberries" className='bandImage'/>
                <p className='textCenter'>The Cranberries were an Irish rock band formed in Limerick, Ireland in 1989 by lead singer Niall Quinn, guitarist Noel Hogan, bassist Mike Hogan, and drummer Fergal Lawler. Quinn was replaced as lead singer by Dolores O'Riordan in 1990.</p>
            </div>
         );
    }
}
 
export default Band;