import React,{Component} from 'react';

class Gemini extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Gemini Page</h1>
                <h2>Welcome {this.props.userName}</h2>
            </div>
         );
    }
}
 
export default Gemini;