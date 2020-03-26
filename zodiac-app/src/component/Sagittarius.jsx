import React, { Component } from 'react';

class Sagittarius extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'>
                    <div className='symbols'>
                        <h2>Dates: November 23 – December 21</h2>
                        <h2>Symbol: The Archer</h2>
                        <h2>Element: Fire</h2>
                        <h2>Ruling Planet: Jupiter</h2>
                        <h2>Spirit Color: Light Blue</h2>
                        <h2>Lucky Gem: Topaz</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'>You're a <span>Sagittarius</span>!</h1>
                        <h2>Motto: "Towering genius disdains a beaten path."</h2>
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