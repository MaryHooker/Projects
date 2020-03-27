import React,{Component} from 'react';
import Artist from './Artist';
import Band from './Band';
import Book from './Book';
import Movie from './Movie';
import Show from './Show';
import VideoGame from './VideoGame';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>These Are A Few Of My Favorite Things...</h1>
                <Artist/>
                <Band/>
                <Book/>
                <Movie/>
                <Show/>
                <VideoGame/>
            </div>
         );
    }
}
 
export default AppContainer;