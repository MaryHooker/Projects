import React,{Component} from 'react';

class Banking extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bankingSecrets:[],
         }
    }

       //loadData of all Personal secrets 
       componentDidMount() {
        this.allBankingSecrets();
        // this.loadType();
    }

    //fetch method to show all passwords
    allBankingSecrets = async () => {
        let response = await fetch('/api/secret/banking');
        let json = await response.json();
        //sanity
        console.table(json)
        this.setState({
            bankingSecrets: json
        })

        console.log(`Banking ${JSON.stringify(this.state.bankingSecrets)}`)
    }
    render() { 
        return ( 
            <div>
                <h4 className='categoryLinks'>Banking Secrets</h4>
                {
                this.state.bankingSecrets.map((secret) => {
                    return(
                        <div key={secret._id}>
                            <p><span>For:</span> {secret.For}</p>
                            <p><span>Data:</span> {secret.Confidential}</p>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
         );
    }
}
 
export default Banking;