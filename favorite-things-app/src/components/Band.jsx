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
                <img src="https://s3.amazonaws.com/ohmyrocknessdotcom/uploads/band/image/41110/cran.jpg" alt="cranberries"/>
            </div>
         );
    }
}
 
export default Band;