import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class BillToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billsList: [],
        }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount() {
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async () => {
        let response = await fetch('/api/bill');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                billsList: json
            }
        )
    }
    render() {
        return (
            <div>
                <div>
                    <br />
                    <Button variant='warning' className='buttonColor'><Link to='/addBill'><p className='buttons'>Add Bill</p></Link></Button>
                </div>
                <br />
                {
                    this.state.billsList.map((task) => {
                        return (
                            <div key={task._id}>
                                <Link to={`/billdetails/${task.bill}`}>
                                    <p><span>Bill:</span> {task.bill}</p>
                                </Link>
                                <p><span>Pay By:</span> {task.payBy}</p>
                                <p><span>Due Date:</span> {task.billDueDate}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default BillToDos;