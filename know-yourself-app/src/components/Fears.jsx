import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Fears extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className='linkTitles'>What are you afraid of?</h1>
                <div>
                <br/>
                    <label htmlFor="child" className='linkLabels'>What was you biggest fear as a child?</label>
                    <br />
                    <textarea name="child" id="child" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="adult" className='linkLabels'>What is your biggest fear now?</label>
                    <br />
                    <textarea name="adult" id="adult" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="when" className='linkLabels'>Have either of these fears ever came true? If so, when?</label>
                    <br />
                    <textarea name="when" id="when" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="" className='linkLabels'>What are you more afraid of?</label>
                    <br />
                    <Button className='linkButtons'>Snakes?</Button> <span>or</span> <Button className='linkButtons'>Spiders?</Button>
                </div>
            </div>
        )
    }
}

export default Fears;