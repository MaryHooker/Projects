import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class WorkToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workList: [],
        }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount() {
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async () => {
        let response = await fetch('/api/work');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                workList: json
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <br />
                    <Button variant='warning' className='buttonColor'><Link to='/addWork'><p className='buttons'>Add Work Task</p></Link></Button>
                </div>
                <br />
                    {
                        this.state.workList.map((work) => {
                            return (
                                <div key={work._id}>
                                    <Link to={`/workdetails/${work.workDate}`}>
                                        <p><span>Date:</span> {work.workDate}</p>
                                    </Link>
                                    <p><span>Task:</span> {work.workTask}</p>
                                    <p><span>Due Date:</span> {work.workDueDate}</p>
                                    <hr />
                                </div>
                            )
                        })
                    }
            </div>
        );
    }
}

export default WorkToDos;