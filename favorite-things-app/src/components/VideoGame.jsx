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
            </div>
         );
    }
}
 
export default VideoGame;