import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class HappyJoys extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className='linkTitles'>Where do you find happiness?</h1>
                <div>
                <br/>
                    <label htmlFor="smell" className='linkLabels'>What is your favorite smell?</label>
                    <br />
                    <textarea name="smell" id="smell" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="place" className='linkLabels'>When you go to your happy place in your mind, what does it look like?</label>
                    <br />
                    <textarea name="place" id="place" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="hobby" className='linkLabels'>What is your favorite hobby?</label>
                    <br />
                    <textarea name="hobby" id="hobby" cols="30" rows="2"className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor=""  className='linkLabels'>Would you rather:</label>
                    <br />
                    <Button className='linkButtons'>Have a real pokemon that never dies?</Button> <span>or</span> <Button className='linkButtons'>Be able to fly?</Button>
                </div>
            </div>
        )
    }
}

export default HappyJoys;