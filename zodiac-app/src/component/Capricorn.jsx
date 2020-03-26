import React, { Component } from 'react';

class Capricorn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div className='symbols'>
                        <h2>Dates: December 22 – January 19</h2>
                        <h2>Symbol: The Goat</h2>
                        <h2>Element: Earth</h2>
                        <h2>Ruling Planet: Saturn</h2>
                        <h2>Spirit Color: Dark blue</h2>
                        <h2>Lucky Gem: Lapis lazuli</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're a <span>Capricorn</span>!</h1>
                        <h2>Motto: "I can succeed at anything I put my mind to."</h2>
                    </div>
                    <div className='strengths'>
                        <h3>Strengths: Driven, patient, strategic, determined, disciplined, reliable, responsible and persistent</h3>
                        <h3>Weaknesses: Pessimistic, greedy, cynical, fearful, ruthless in achieving a goal, rigid, and miserly</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Capricorn;