import React, { Component } from 'react';
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

            aries: false,
            taurus: false,
            gemini: false,
            cancer: false,
            leo: false,
            virgo: false,
            libra: false,
            scorpio: false,
            sagittarius: false,
            capricorn: false,
            aquarius: false,
            pisces: false,

        }
    }

    updateSign = (event) => {

        if (event.target.alt === 'aries') {
            this.setState({
                aries: true,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'taurus') {
            this.setState({
                taurus: true,
                aries: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'cancer') {
            this.setState({
                cancer: true,
                aries: false,
                taurus: false,
                gemini: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'gemini') {
            this.setState({
                gemini: true,
                aries: false,
                taurus: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'cancer') {
            this.setState({
                cancer: true,
                aries: false,
                taurus: false,
                gemini: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'leo') {
            this.setState({
                leo: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'virgo') {
            this.setState({
                virgo: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'libra') {
            this.setState({
                libra: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'scorpio') {
            this.setState({
                scorpio: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'sagittarius') {
            this.setState({
                sagittarius: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                capricorn: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'capricorn') {
            this.setState({
                capricorn: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                aquarius: false,
                pisces: false,
            })
        } else if (event.target.alt === 'aquarius') {
            this.setState({
                aquarius: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                pisces: false,
            })
        } else if (event.target.alt === 'pisces') {
            this.setState({
                pisces: true,
                aries: false,
                taurus: false,
                gemini: false,
                cancer: false,
                leo: false,
                virgo: false,
                libra: false,
                scorpio: false,
                sagittarius: false,
                capricorn: false,
                aquarius: false,
            })
        }

    }


    render() {
        let userZodiacPage;

        if (this.state.aries) {
            userZodiacPage = <Aries />
        } else if (this.state.taurus) {
            userZodiacPage = <Taurus />
        } else if (this.state.gemini) {
            userZodiacPage = <Gemini />
        } else if (this.state.cancer) {
            userZodiacPage = <Cancer />
        } else if (this.state.leo) {
            userZodiacPage = <Leo />
        } else if (this.state.virgo) {
            userZodiacPage = <Virgo />
        } else if (this.state.libra) {
            userZodiacPage = <Libra />
        } else if (this.state.scorpio) {
            userZodiacPage = <Scorpio />
        } else if (this.state.sagittarius) {
            userZodiacPage = <Sagittarius />
        } else if (this.state.capricorn) {
            userZodiacPage = <Capricorn />
        } else if (this.state.aquarius) {
            userZodiacPage = <Aquarius />
        } else if (this.state.pisces) {
            userZodiacPage = <Pisces />
        }


        return (
            <div >

                <div>
                    <label htmlFor="sign" className='header'>What is your Zodiac Sign? </label>
                    <br />
                    <div className='container'>
                        
                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aries_1024x1024.png?v=1517850072" alt="aries" onClick={this.updateSign} className='sign' />

                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-cancer_1024x1024.png?v=1517625158" alt="cancer" onClick={this.updateSign} className='sign' />

                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-gemini_1024x1024.png?v=1517844742" alt="gemini" onClick={this.updateSign} className='sign' />

                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-taurus_1024x1024.png?v=1517849684" alt="taurus" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-leo_1024x1024.png?v=1517617612" alt="leo" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-virgo_1024x1024.png?v=1517590104" alt="virgo" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-libra_1024x1024.png?v=1517444894" alt="libra" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-scorpio_1024x1024.png?v=1517441497" alt="scorpio" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-sagittarius_1024x1024.png?v=1517414803" alt="sagittarius" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-capricorn_1024x1024.png?v=1517361013" alt="capricorn" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aquarius_1024x1024.png?v=1517258109" alt="aquarius" onClick={this.updateSign} className='sign' />


                        <img src="https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-pisces_1024x1024.png?v=1517257307" alt="pisces" onClick={this.updateSign} className='sign' />
                    </div>

                </div>

                <div className='infoDisplay'>
                    {userZodiacPage}
                </div>
            </div>
        );
    }
}


export default ZodiacPage;

// Aries – Red
// Taurus- Pastel shades of pink, pale blue and green…
// Gemini- Yellow
// Cancer- Silvery Blue/Smokey Grey
// Leo – Orange/Yellow (color of sun)
// Virgo – Green and Dark Brown
// Libra – Pink, Pale Green and various shades of blue
// Scorpion – Deep Red and Maroon
// Sagittarius – Rich Purples and Dark Blues
// Capricorn – Subdued dark green, gray, black and brown
// Aquarius – Electric Blue and Turquoise
// Pisces- Soft Sea Green
