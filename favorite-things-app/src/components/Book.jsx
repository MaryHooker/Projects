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
            </div>
         );
    }
}
 
export default Book;