import React,{Component} from 'react';

class MyFavorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteMovies: [],
        }
    }

    // Run fetch method when component mounts
    componentDidMount() {
        this.loadData();
    }

    //View Only Verified Users Reviews if AUTHORIZED
    loadData = async () => {
        //fetch endpoint to view reviews based on EMAIL
        let response = await fetch(`/api/who/movies`, {
            method: 'GET',
            //pull down token from AppContainer to authorize viewing
            headers: {
                'Authorization': this.props.token
            }

        });

        //wait for response
        let json = await response.json();

            this.setState({ favoriteMovies: json })
            //sanity
            console.log(`My Movies: ${JSON.stringify(this.state)}`);
        
    }

    render() {
        return (
            <div>
                <h2>My Favorite Movies</h2>
                {
                    this.state.favoriteMovies.map((favorite) =>{
                        return(
                            <div key={favorite._id}>
                                <p>Movie: {favorite.movieTitle}</p>
                                <p>Details: {favorite.details}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default MyFavorites;