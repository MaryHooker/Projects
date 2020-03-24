import React,{Component} from 'react';

class Sagittarius extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>You're a Sagittarius!</h1>
            <div className='infoContainer'>
                <div className='symbols'>
                <h2>Dates: November 23 – December 21</h2>
                    <h2>Symbol: The Archer</h2>
                    <h2>Element: Fire</h2>
                    <h2>Ruling Planet: Jupiter</h2>
                </div>
                <div className='personality'>
                    <h1>personality</h1>
                </div>
                <div className='strengths'>
                    <h3>Strengths: Ambitious, Lucky, Moral, Optimistic, Enthusiastic, Open-minded, Versatile</h3>
                    <h3>Weaknesses: Gluttonous, Lazy, Restless, Irresponsible, Blindly Optimistic, Tactless</h3>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Sagittarius;