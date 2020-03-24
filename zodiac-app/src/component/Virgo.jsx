import React,{Component} from 'react';

class Virgo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Virgo!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: August 23 – September 22</h2>
                    <h2>Symbol: The Virgin</h2>
                    <h2>Element: Earth</h2>
                    <h2>Ruling Planet: Mercury</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Humble, altruistic, logical, responsible, organized, orderly, modest, devoted</h3>
                    <h3>Weaknesses: Obsessive, critical, excessive attention to insignificant details, perfectionist</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Virgo;