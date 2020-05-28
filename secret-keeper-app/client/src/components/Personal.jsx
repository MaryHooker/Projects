import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secretArray:[{
                id:[],


            }
                
            ],

        }
    }

    //loadData of all Personal secrets 
    componentDidMount() {
        this.allPersonalSecrets();
        // this.loadType();
    }

    //fetch method to show all passwords
    allPersonalSecrets = async () => {
        let response = await fetch('/api/secret/personal',{
            method:'GET',
            headers:{
                'Authorization':this.props.token
            }
        });
        let json = await response.json();
        //sanity
        console.table(json)
        this.setState({
            secretArray: json
        })

        console.log(`Personal ${JSON.stringify(this.state.secretArray)}`)
    }

    // loadType = async () => {
    //     let response = await fetch(`/api/task`)
    // }

    render() {
        return (
            <div>
                <h4 className='categoryLinks'>Personal Secrets</h4>
            {
                this.state.secretArray.map((secret) => {
                    return(
                        <div key={secret._id}>
                            <p><span>For:</span> {secret.For}</p>
                            <p><span>Password:</span> {secret.password}</p>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}

export default Personal;