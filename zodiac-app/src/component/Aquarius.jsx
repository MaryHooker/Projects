import React, { Component } from 'react';

class Aquarius extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className='yourSign'>You're an Aquarius!</h1>
                <div className='infoContainer'>
               
                    <div className='motto'>
                        <h2>Motto: "There is no me, there is only we."</h2>
                    </div>
                    <div className='symbols'>
                        <h2>Dates: January 20 – February 18</h2>
                        <h2>Symbol: The Water Bearer</h2>
                        <h2>Element: Air</h2>
                        <h2>Ruling Planet: Uranus</h2>
                        <h2>Spirit Color: Sky blue</h2>
                        <h2>Lucky Gem: Amethyst</h2>
                        
                    </div>
                    
                    <div className='strengths'>
                        <h3>Strengths: Intelligent, inventive, humanistic, friendly, altruistic, sociable, and reformative</h3>
                        <h3>Weaknesses: Rebels without a cause, emotionally detached, scatterbrained, irresponsible and impersonal</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aquarius;