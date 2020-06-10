import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class PersonalToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalList: [],
        }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount() {
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async () => {
        let response = await fetch('/api/personal');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                personalList: json
            }
        )
    }
    render() {
        return (
            <div>
                <div>
                    <br />
                    <Button variant='warning' className='buttonColor'><Link to='/addPersonal'><p className='buttons'>Add Personal Task</p></Link></Button>
                </div>
                <br />
                {
                    this.state.personalList.map((task) => {
                        return (
                            <div key={task._id}>
                                <Link to={`/personaldetails/${task.personalDate}`}>
                                    <p><span>Date:</span> {task.personalDate}</p>
                                </Link>
                                <p><span>Task:</span> {task.personalTask}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default PersonalToDos;