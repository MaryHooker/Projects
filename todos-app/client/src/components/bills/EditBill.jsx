import React,{Component} from 'react';

class EditBill extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bill:"",
            payBy:"",
            billDueDate:"",
         }
    }

    componentDidMount(){
        this.loadData();
    }

    //Pulling in specific bill to update
    loadData = async() => {
        let response = await fetch(`/api/bill/${this.props.match.params.bill}`);
        let json = await response.json();
        console.log(json)
        this.setState({
            bill:json.bill,
            payBy:json.payBy,
            billDueDate:json.billDueDate,
        })
    }

    //handle change in inputs
    handleInputs = (event) => {
        if(event.target.name==='bill'){
            this.setState({bill:event.target.value})
        } else if(event.target.name==='payBy'){
            this.setState({payBy:event.target.value})
        } else if(event.target.name==='billDueDate'){
            this.setState({billDueDate:event.target.value})
        }
    }

    handleSubmission = async(event) => {
        event.preventDefault();
        let newData = {
            bill:this.state.bill,
            payBy:this.state.payBy,
            billDueDate:this.state.billDueDate                                                              
        }
        let response = await fetch(`/api/bill/${this.state.bill}`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        let json = await response.json();
        console.log(`Edit Bill${JSON.stringify(json)}`)
    }

    render() { 
        return ( 
            <div>
                <h2>Edit Bill</h2>
                <form action="">
                <div>
                        <label htmlFor="bill">Bill: </label>
                        <input type="text" name='bill' id='bill' value={this.state.bill} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <label htmlFor="payBy">Pay By: </label>
                        <input type="text" name='payBy' id='payBy' value={this.state.payBy} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <label htmlFor="billDueDate">Bill Due Date: </label>
                        <input type="date" name='billDueDate' id='billDueDate' value={this.state.billDueDate} onChange={this.handleInputs}/>
                    </div>
                    <div>
                        <br/>
                        <button onClick={this.handleSubmission}>Submit</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditBill;