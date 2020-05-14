import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ViewBillTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: "",
            payBy: "",
            billDueDate: "",
        }
    }

    //fetch data when mount
    componentDidMount() {
        this.loadData();
    }

    //fetch method to view one Bill
    loadData = async () => {
        console.log(`VIEW BILL TASK ${JSON.stringify(this.props.match.params)}`);
        let bill = this.props.match.params.bill;
        let response = await fetch(`/api/bill/${bill}`);
        // Pull out the json data
        let json = await response.json();
        //sanity
        console.log(`VIEW ${JSON.stringify(json)}`);

        this.setState(
            {
                bill: json.bill,
                payBy: json.payBy,
                billDueDate: json.billDueDate,
            }
        )
    }

    render() {
        return (
            <div>
                <br/>
                <h4 className='specificTitle'>Bill</h4>
                <p><span>Bill:</span> {this.state.bill}</p>
                <p><span>Pay By:</span> {this.state.payBy}</p>
                <p><span>Due Date:</span> {this.state.billDueDate}</p>
                <Link to={`/update/bill/${this.state.bill}`}><button>Edit</button></Link>  <button>Delete</button>
            </div>
        );
    }
}

export default ViewBillTask;