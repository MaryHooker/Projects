import React, { Component } from 'react';

class Aquarius extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='infoContainer'> 
                    <div className='symbols'>
                        <h2><span>Dates:</span> January 20 – February 18</h2>
                        <h2><span>Symbol:</span> The Water Bearer</h2>
                        <h2><span>Element:</span> Air</h2>
                        <h2><span>Ruling Planet:</span> Uranus</h2>
                        <h2><span>Spirit Color:</span> Sky blue</h2>
                        <h2><span>Lucky Gem:</span> Amethyst</h2>
                    </div>
                    <div className='motto'>
                        <h1 className='yourSign'><span>You're an </span><span className='signSpan'>Aquarius</span>!</h1>
                        <h2><span>Motto:</span> "There is no me, there is only we."</h2>
                    </div> 
                    <div className='strengths'>
                        <h3><span>Strengths:</span> Intelligent, inventive, humanistic, friendly, altruistic, sociable, and reformative</h3>
                        <br/>
                        <h3><span>Weaknesses:</span> Rebels without a cause, emotionally detached, scatterbrained, irresponsible and impersonal</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aquarius;