import React,{Component} from 'react';
import Aries from './Aries';
import Taurus from './Taurus';
import Gemini from './Gemini';
import Cancer from './Cancer';
import Leo from './Leo';
import Virgo from './Virgo';
import Libra from './Libra';
import Scorpio from './Scorpio';
import Sagittarius from './Sagittarius';
import Capricorn from './Capricorn';
import Aquarius from './Aquarius';
import Pisces from './Pisces';

class ZodiacPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            // zodiacSign: '',
            aries: false,
            taurus: false,
            gemini: false,
            cancer: false,
            // leo: false,
            // virgo: false,
            // libra: false,
            // scorpio: false,
            // sagittarius: false,
            // capricorn: false,
            // aquarius: false,
            // pisces: false,
         }
    }

    updateName = (event) =>{
        if(event.target.name==='userName'){
            this.setState(
                {
                    userName: event.target.value
                }
            )
        }
    }

    updateSign = (event) =>{
        if(event.target.value==='aries'||'Aries'){
            this.setState(
                {
                    aries: true
                }
            )
        } else if (event.target.value==='taurus'||'Taurus'){
            this.setState(
                {
                    taurus: true
                }
            )
        } else if (event.target.value==='gemini'||'Gemini'){
            this.setState(
                {
                    gemini: true
                }
            )
        } else if (event.target.value==='cancer'||'Cancer'){
            this.setState(
                {
                    cancer: true
                }
            )
        }

    }


showSignPage =(event) =>{
   event.preventDefault();

   let userZodiacPage;
       
   if(this.state.aries){
       userZodiacPage= <Aries userName={this.state.userName}/>
   } else if(this.state.taurus){
       userZodiacPage= <Taurus userName={this.state.userName}/>
   } else if(this.state.gemini){
       userZodiacPage= <Gemini userName={this.state.userName}/>
   } else if(this.state.cancer){
       userZodiacPage= <Cancer userName={this.state.userName}/>
   }

}

    render() { 
        // let userZodiacPage;
       
        // if(this.state.aries){
        //     userZodiacPage= <Aries userName={this.state.userName}/>
        // } else if(this.state.taurus){
        //     userZodiacPage= <Taurus userName={this.state.userName}/>
        // } else if(this.state.gemini){
        //     userZodiacPage= <Gemini userName={this.state.userName}/>
        // } else if(this.state.cancer){
        //     userZodiacPage= <Cancer userName={this.state.userName}/>
        // }
        //  else if(this.state.leo){
        //     userZodiacPage= <Leo/>
        // } else if(this.state.virgo){
        //     userZodiacPage= <Virgo/>
        // } else if(this.state.libra){
        //     userZodiacPage= <Libra/>
        // } else if(this.state.scorpio){
        //     userZodiacPage= <Scorpio/>
        // } else if(this.state.sagittarius){
        //     userZodiacPage= <Sagittarius/>
        // } else if(this.state.capricorn){
        //     userZodiacPage= <Capricorn/>
        // } else if(this.state.aquarius){
        //     userZodiacPage= <Aquarius/>
        // } else if(this.state.pisces){
        //     userZodiacPage= <Pisces/>
        // }
       
        return ( 
            <div>
                <div>
                <label htmlFor="name">What is your Name? </label>
                <input type="text" id='userName' name='userName' value={this.state.userName} onChange={this.updateName}/>
                </div>
                <div>
                <label htmlFor="sign">What is your Zodiac Sign? </label>
                <input type="text" id='sign' name='sign' onChange={this.updateSign}/>
                </div>
                <button onClick={this.showSignPage}>Submit</button>
                <div>
                    {this.userZodiacPage}
                </div>
            </div>
         );
    }
}
 
export default ZodiacPage;