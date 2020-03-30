import React,{Component} from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>The Office</h2>
                <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7PCJVVULBBBJXAXS6BH7HMMUL4.jpg" alt="office" className='officeImage'/>
            </div>
         );
    }
}
 
export default Show;