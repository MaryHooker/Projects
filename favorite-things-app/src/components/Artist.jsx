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
                <img src="/monet.jpg" alt="monet" className='monetImage'/>
                <p className='textCenter'>Oscar-Claude Monet was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting.</p>
            </div>
         );
    }
}
 
export default Artist;