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
                <p>A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott.</p>
            </div>
         );
    }
}
 
export default Show;