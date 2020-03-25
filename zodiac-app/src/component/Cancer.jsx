import React, { Component } from 'react';

class Cancer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className='yourSign'>You're a Cancer!</h1>
                <div className='infoContainer'>
                   
                    <div className='motto'>
                        <h2>Motto: "I feel, therefore I am."</h2>
                    </div>
                    <div className='symbols'>
                        <h2>Dates: June 21 – July 22</h2>
                        <h2>Symbol: The Crab</h2>
                        <h2>Element: Water</h2>
                        <h2>Ruling Planet: The Moon</h2>
                        <h2>Spirit Color: Violet</h2>
                        <h2>Lucky Gem: Ruby, pearl</h2>
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