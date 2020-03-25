import React, { Component } from 'react';

class Gemini extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className='yourSign'>You're a Gemini!</h1>
                <div className='infoContainer'>
                
                    <div className='motto'>
                        <h2>Motto: "I manifest my reality."</h2>
                    </div>
                    <div className='symbols'>
                        <h2>Dates: May 21 – June 20</h2>
                        <h2>Symbol: The Twins</h2>
                        <h2>Element: Air</h2>
                        <h2>Ruling Planet: Mercury</h2>
                        <h2>Spirit Color: Yellow</h2>
                        <h2>Lucky Gem: Tiger's Eye & Emerald</h2>
                    </div>
                    
                    <div className='strengths'>
                        <h3>Strengths: Intelligent, Adaptable, Agile, Communicative, Informative, Connected</h3>
                        <h3>Weaknesses: Talkative, Exaggerating, Deceptive, Cunning, Superficial, Inconsistent</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gemini;