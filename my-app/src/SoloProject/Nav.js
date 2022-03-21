import React from 'react';

function Nav(props) {
    return (
        <div className='nav'>
            <div className='nav_item'>
                <img src={require('../images/logo.png')} className='nav_image'/>
            </div>
            <div>
                <p className='nav_text'>My travel journal.</p>
            </div>
        </div>
    );
}

export default Nav;