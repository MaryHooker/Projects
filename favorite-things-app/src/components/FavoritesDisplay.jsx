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
                                <h3 className='nameSize'><span>{favorite.name}'s Favorites</span></h3>
                                <p><span>Artist:</span> {favorite.artist}</p>
                                <p><span>Band:</span> {favorite.band}</p>
                                <p><span>Book:</span> {favorite.book}</p>
                                <p><span>Movie:</span> {favorite.movie}</p>
                                <p><span>Show:</span> {favorite.show}</p>
                                <p className='breaks'><span>Video Game:</span> {favorite.videogame}</p>
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