import React,{Component} from 'react';

class Cancer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Cancer!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: June 21 – July 22</h2>
                    <h2>Symbol: The Crab</h2>
                    <h2>Element: Water</h2>
                    <h2>Ruling Planet: The Moon</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Nurturing, Supportive, Healing, Compassionate, Unconditionally Loving</h3>
                    <h3>Weaknesses: Dependent, Indirect, Moody, Passive Aggressive, Unable To Let Go</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Cancer;