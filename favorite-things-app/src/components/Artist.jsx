import React,{Component} from 'react';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h3>Oscar-Claude Monet</h3>
                <img src="https://www.theartstory.org/images20/new_design/bio_box/bio_box_monet_claude.jpg" alt="monet"/>
            </div>
         );
    }
}
 
export default Artist;