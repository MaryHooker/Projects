import React,{Component} from 'react';

class PersonalToDos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personalList:[],
         }
    }

    //lifecycle to run inner function when component mounts
    componentDidMount(){
        this.loadData();
    }

    //Fetch all documents from Work To Dos database
    loadData = async() => {
        let response = await fetch('/api/personal');
        let json = await response.json();
        console.table(json);
        //place in state
        this.setState(
            {
                personalList:json
            }
        )
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.personalList.map((task)=>{
                        return(
                            <div key={task._id}>
                                <p>Date: {task.personalDate}</p>
                                <p>Task: {task.personalTask}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default PersonalToDos;