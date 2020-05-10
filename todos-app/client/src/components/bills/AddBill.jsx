import React,{Component} from 'react';

class AddBill extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bill: '',
            payBy: '',
            billDueDate: '',
         }
    }

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
        let formData ={
            bill:this.state.bill,
            payBy:this.state.payBy,
            billDueDate:this.state.billDueDate
        };
        //fetch method to add work route
        let response = await fetch('/api/bill',{
            method:'POST',
            headers:{
                'Accept':"application/json",
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        let json = await response.json();

        console.log(`Created ${json}`)
    }

    render() { 
        return ( 
            <div>
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
 
export default AddBill;