import React,{Component} from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <h2>Where The Wild Things Are</h2>
                <p>By Maurice Sendak</p>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71eczBv1C5L._AC_SL1001_.jpg" alt="bookPic" className='bookImage'/>
                <p>Where the Wild Things Are, by Maurice Sendak, is the story of a little boy and main character of the story, named Max. After his mother sends him to bed without dinner, Max falls asleep and his room immediately transforms into a moonlit forest surrounded by a vast ocean.</p>
            </div>
         );
    }
}
 
export default Book;