import React,{Component} from 'react';

class Pisces extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Pisces!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: February 19 – March 20</h2>
                    <h2>Symbol: The Fish</h2>
                    <h2>Element: Water</h2>
                    <h2>Ruling Planet: Neptune</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Mystical, intuitive, imaginative, compassionate, sensitive and romantic</h3>
                    <h3>Weaknesses: Escapist, unrealistic, submissive, lethargic, self-pitying, lacking boundaries, dependent and codependent</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Pisces;