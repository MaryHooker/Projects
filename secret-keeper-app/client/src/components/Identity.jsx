import React,{Component} from 'react';

class Identity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            identitySecrets:[],
         }
    }

       //loadData of all Idenitity secrets 
       componentDidMount() {
        this.allIdentitySecrets();
        // this.loadType();
    }

    //fetch method to show all data of identity collection
    allIdentitySecrets = async () => {
        let response = await fetch('/api/secret/identity',{
            method:'GET',
            headers:{
                'Authorization':this.props.token
            }
        });
        let json = await response.json();
        //sanity
        console.table(json)
        this.setState({
            identitySecrets: json
        })

        console.log(`Identity ${JSON.stringify(this.state.identitySecrets)}`)
    }

    render() { 
        return ( 
            <div>
                <h4 className='categoryLinks'>Identity Secrets</h4>
                {     
                        this.state.identitySecrets.map((secret) => {
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
 
export default Identity;