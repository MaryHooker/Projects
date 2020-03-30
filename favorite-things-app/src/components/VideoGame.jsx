import React,{Component} from 'react';

class VideoGame extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>The Outer Worlds</h2>
                <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheOuterWorlds_image1600w.jpg" alt="outerWorlds" className='outerWorldsImage'/>
                <p>The Outer Worlds is a new single-player first-person sci-fi RPG from Obsidian Entertainment and Private Division. Lost in transit while on a colonist ship bound for the furthest edge of the galaxy, you awake decades later only to find yourself in the midst of a deep conspiracy threatening to destroy the Halcyon colony.</p>
            </div>
         );
    }
}
 
export default VideoGame;