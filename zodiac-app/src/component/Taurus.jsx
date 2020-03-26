import React, { Component } from 'react';

class Taurus extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div className='symbols'>
                        <h2>Dates: April 20 – May 20</h2>
                        <h2>Symbol: The Bull</h2>
                        <h2>Element: Earth</h2>
                        <h2>Ruling Planet: Venus</h2>
                        <h2>Spirit Color: Pink</h2>
                        <h2>Lucky Gem: Emerald</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're a <span>Taurus</span>!</h1>
                        <h2>Motto: "Nothing worth having comes easy."</h2>
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