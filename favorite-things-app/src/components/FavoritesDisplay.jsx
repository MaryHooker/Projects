import React,{Component} from 'react';

class FavoritesDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {
                    this.props.favorites.map((favorite,index)=>{
                        return(
                            <div key={index}>
                                <h3>{favorite.name}'s Favorites</h3>
                                <p>Artist: {favorite.artist}</p>
                                <p>Band: {favorite.band}</p>
                                <p>Book: {favorite.book}</p>
                                <p>Movie: {favorite.movie}</p>
                                <p>Show: {favorite.show}</p>
                                <p className='breaks'>Video Game: {favorite.videogame}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default FavoritesDisplay;