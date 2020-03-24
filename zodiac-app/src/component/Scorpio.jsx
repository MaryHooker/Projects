import React,{Component} from 'react';

class Scorpio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Scorpio!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: October 23 – November 22</h2>
                    <h2>Symbol: The Scorpion</h2>
                    <h2>Element: Water</h2>
                    <h2>Ruling Planet: Pluto</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Passionate, Driven, Perceptive, Emotional, Sacrificing, Determined</h3>
                    <h3>Weaknesses: Vindictive, Paranoid, Destructive, Possessive, Jealous, Clingy</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Scorpio;