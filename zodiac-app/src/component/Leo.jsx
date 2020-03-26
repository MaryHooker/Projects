import React, { Component } from 'react';

class Leo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div className='symbols'>
                        <h2>Dates: July 23 – August 22</h2>
                        <h2>Symbol: The Lion</h2>
                        <h2>Element: Fire</h2>
                        <h2>Ruling Planet: The Sun</h2>
                        <h2>Spirit Color: Gold</h2>
                        <h2>Lucky Gem: Carnelian</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're a <span>Libra</span>!</h1>
                        <h2>Motto: "If you know the way, go the way and show the way—you're a leader."</h2>
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