import React,{Component} from 'react';
import CustomerRegister from './CustomerRegister';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Dreamer</h1>
                <CustomerRegister/>
            </div>
         );
    }
}
 
export default AppContainer;