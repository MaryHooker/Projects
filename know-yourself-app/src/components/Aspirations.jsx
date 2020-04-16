import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Aspirations extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className='linkTitles'>What are your dreams in life?</h1>
                <div>
                    <br/>
                    <label htmlFor="job" className='linkLabels'>If you could have any job, what would it be?</label>
                    <br />
                    <textarea name="job" id="job" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="live" className='linkLabels'>If you could live anywhere, where would you live?</label>
                    <br />
                    <textarea name="live" id="live" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="money" className='linkLabels'>If you won $100,000,000, what would you do with it?</label>
                    <br />
                    <textarea name="money" id="money" cols="30" rows="2" className='textArea'></textarea>
                    <br />
                    <br />
                    <label htmlFor="" className='linkLabels'>Would you rather:</label>
                    <br />
                    <Button className='linkButtons'>Have a private jet?</Button> <span>or</span> <Button className='linkButtons'>Have a yaght?</Button>
                </div>
            </div>
        )
    }
}

export default Aspirations;