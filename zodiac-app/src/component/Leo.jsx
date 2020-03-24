import React,{Component} from 'react';

class Leo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Leo!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: July 23 – August 22</h2>
                    <h2>Symbol: The Lion</h2>
                    <h2>Element: Fire</h2>
                    <h2>Ruling Planet: The Sun</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Brave, Playful, Leader, Fun, Warm, Protective, Generous, Charismatic</h3>
                    <h3>Weaknesses: Egotistical, Dominating, Stubborn, Controlling, A Show-off, Vain</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Leo;