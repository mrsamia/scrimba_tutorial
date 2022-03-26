import React from 'react';
import './memeGenerator.css';

function Header(props) {
    return (
        <div className='meme_nav'>
            <img className='imagee' src={require('../images/TrollFace.png')} />
            <h1 className='h1_txt'>Meme Generator</h1>
            <h4 className='h4_txt'>React Course -3</h4>
        </div>

    );
}

export default Header;