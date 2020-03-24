import React,{Component} from 'react';

class Taurus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Taurus!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: April 20 – May 20</h2>
                    <h2>Symbol: The Bull</h2>
                    <h2>Element: Earth</h2>
                    <h2>Ruling Planet: Venus</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Steady, driven, tenacious, patient, enduring, persistent, solid, determined, trustworthy, tasteful</h3>
                    <h3>Weaknesses: Materialistic, resistant to change, fanatical, indulgent, gluttonous, possessive, stubborn, narrow-minded</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Taurus;