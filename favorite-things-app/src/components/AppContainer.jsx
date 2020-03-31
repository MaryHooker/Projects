import React,{Component} from 'react';
import LinksPage from './LinksPage';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <LinksPage/>
            </div>
         );
    }
}
 
export default AppContainer;