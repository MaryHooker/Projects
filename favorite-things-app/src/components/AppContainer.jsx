import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Artist from './Artist';
import Band from './Band';
import Book from './Book';
import Movie from './Movie';
import Show from './Show';
import VideoGame from './VideoGame';
import FavoritesForm from './FavoritesForm';
import FavoritesDisplay from './FavoritesDisplay';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
        }
    }

    updateArray = (array) => {
        this.setState(
            {
                favorites: array
            }
        )
    }

    render() {

        return (
            <div>
                <h1>My Favorites</h1>
                <Router >
                    <Link to="/" className='links'>Home</Link>
                    <Link to="/artist" className='links'>Artist</Link>
                    <Link to="/band" className='links'>Band</Link>
                    <Link to="/book" className='links'>Book</Link>
                    <Link to="/movie" className='links'>Movie</Link>
                    <Link to="/show" className='links'>Show</Link>
                    <Link to="/videogame" className='links'>Video Game</Link>
                    <Route path="/artist">
                        <Artist />
                    </Route>
                    <Route path="/band">
                        <Band />
                    </Route>
                    <Route path="/book">
                        <Book />
                    </Route>
                    <Route path="/movie">
                        <Movie />
                    </Route>
                    <Route path="/show">
                        <Show />
                    </Route>
                    <Route path="/videogame">
                        <VideoGame />
                    </Route>
                </Router>
                <br/>
                <div className='container'>
                    <div className='form'>
                        <FavoritesForm updateArray={this.updateArray} />
                    </div>
                    <div className='display'>
                        <FavoritesDisplay favorites={this.state.favorites} />
                    </div>
                </div>

            </div>
        );
    }
}

export default AppContainer;