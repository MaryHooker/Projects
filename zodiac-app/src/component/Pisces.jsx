import React, { Component } from 'react';

class Pisces extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div className='symbols'>
                        <h2>Dates: February 19 – March 20</h2>
                        <h2>Symbol: The Fish</h2>
                        <h2>Element: Water</h2>
                        <h2>Ruling Planet: Neptune</h2>
                        <h2>Spirit Color: Sea green</h2>
                        <h2>Lucky Gem: Moonstone</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're a <span>Pisces</span>!</h1>
                        <h2>Motto: "The important thing is not to stop questioning."</h2>
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