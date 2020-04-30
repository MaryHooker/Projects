import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class BillToDos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            billsList:[],
         }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount(){
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async() => {
        let response = await fetch('/api/bill');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                billsList:json
            }
        )
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.billsList.map((task)=>{
                        return(
                            <div key={task._id}>
                                <Link to={`/billdetails/${task.bill}`}>
                                <p>Bill: {task.bill}</p>
                                </Link>
                                <p>Pay By: {task.payBy}</p>
                                <p>Due Date: {task.billDueDate}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default BillToDos;