import React,{Component} from 'react';

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
                                <p>Bill: {task.bill}</p>
                                <p>Pay By: {task.payBy}</p>
                                <p>Due Date: {task.dueDate}</p>
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