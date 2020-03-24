import React,{Component} from 'react';

class Capricorn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Capricorn!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: December 22 – January 19</h2>
                    <h2>Symbol: The Goat</h2>
                    <h2>Element: Earth</h2>
                    <h2>Ruling Planet: Saturn</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Driven, patient, strategic, determined, disciplined, reliable, responsible and persistent</h3>
                    <h3>Weaknesses: Pessimistic, greedy, cynical, fearful, ruthless in achieving a goal, rigid, and miserly</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Capricorn;