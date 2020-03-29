import React, { Component } from 'react';

class FavoritesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            artist: '',
            band: '',
            book: '',
            movie: '',
            show: '',
            videogame: '',
            favorites: [],
        }
    }

    handleInputs = (event) => {
       
        if (event.target.name==='artist'){
            this.setState({artist:event.target.value})
        } else if (event.target.name==='band'){
            this.setState({band:event.target.value})
        } else if (event.target.name==='book'){
            this.setState({book:event.target.value})
        } else if (event.target.name==='movie'){
            this.setState({movie:event.target.value})
        } else if (event.target.name==='show'){
            this.setState({show:event.target.value})
        } else if (event.target.name==='videogame'){
            this.setState({videogame:event.target.value})
        } else if (event.target.name==='name'){
            this.setState({name:event.target.value})
        }

    }

    handleSubmission = (event) => {
        event.preventDefault();

        this.state.favorites.push(
            {
            name:this.state.name,    
            artist: this.state.artist,
            band: this.state.band,
            book: this.state.book,
            movie: this.state.movie,
            show: this.state.show,
            videogame: this.state.videogame,
            }
        )

        this.setState({favorites:this.state.favorites})

        this.props.updateArray(this.state.favorites)

        this.setState(
            {   
                name:'',
                artist: '',
                band: '',
                book: '',
                movie: '',
                show: '',
                videogame: '',  
            }
        )
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Favorites</legend>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <br/>
                            <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleInputs}/>
                        </div>
                        <div className='padding'>
                            <label htmlFor="artist">Who's your favorite artist? </label>
                            <br/>
                            <input type="text" id='artist' name='artist' value={this.state.artist} onChange={this.handleInputs} />
                        </div>
                        <div className='padding'>
                            <label htmlFor="band">Who's your favorite band? </label>
                            <br/>
                            <input type="text" id='band' name='band' value={this.state.band} onChange={this.handleInputs} />
                        </div>
                        <div className='padding'>
                            <label htmlFor="book">What's your favorite book? </label>
                            <br/>
                            <input type="text" id='book' name='book' value={this.state.book} onChange={this.handleInputs} />
                        </div>
                        <div className='padding'>
                            <label htmlFor="movie">What's your favorite movie? </label>
                            <br/>
                            <input type="text" id='movie' name='movie' value={this.state.movie} onChange={this.handleInputs} />
                        </div>
                        <div className='padding'>
                            <label htmlFor="show">What's your favorite show? </label>
                            <br/>
                            <input type="text" id='show' name='show' value={this.state.show} onChange={this.handleInputs} />
                        </div>
                        <div className='padding'>
                            <label htmlFor="videogame">What's your favorite video game?</label>
                            <br/>
                            <input type="text" id='videogame' name='videogame' value={this.state.videogame} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <button onClick={this.handleSubmission}>Submit Favorites</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default FavoritesForm;