import React, { Component } from 'react';

class Aries extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div>
                    </div>
                    <div className='symbols'>
                        <h2>Dates: March 21 – April 19</h2>
                        <h2>Symbol: The Ram</h2>
                        <h2>Element: Fire</h2>
                        <h2>Ruling Planet: Mars</h2>
                        <h2>Spirit Color: Red</h2>
                        <h2>Lucky Gem: Diamond</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're an <span>Aries</span>!</h1>
                        <h2>Motto: "When you know yourself, you're empowered. When you accept yourself, you're invincible."</h2>
                    </div>
                    <div className='strengths'>
                        <h3>Strengths: Brave, powerful, direct, independent, strong sense of justice, innocent, assertive, fearless, head-strong</h3>
                        <h3>Weaknesses: Aggressive, self-centered, blunt, pushy, inconsistent, selfish, loud, domineering, bad-tempered</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aries;