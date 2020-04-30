import React, { Component } from 'react';

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
        let response = await fetch(`/api/bill/${this.props.match.params.bill}`);
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
                <p>Bill: {this.state.bill}</p>
                <p>Pay By: {this.state.payBy}</p>
                <p>Due Date: {this.state.billDueDate}</p>
                <button>Edit </button>  <button>Delete</button>
            </div>
        );
    }
}

export default ViewBillTask;