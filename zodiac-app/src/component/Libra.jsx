import React,{Component} from 'react';

class Libra extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Libra!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: September 23 – October 22</h2>
                    <h2>Symbol: The Scales</h2>
                    <h2>Element: Air</h2>
                    <h2>Ruling Planet: Venus</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Charming, Harmonious, Diplomatic, Easy-going Nature, Polished</h3>
                    <h3>Weaknesses: Indecisive, Superficial, Hypocritical, Gullible, Passive Aggressive</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Libra;