import React from 'react';
import Header from './Header';
import Form from './Form';

function MemeGenerator(props) {
    return (
        <div>
            <Header/>
            <Form/>
            <div className='pt-5'>
                <img src={require('../images/memeimg.png')} width="920px"/>
            </div>
        </div>
    );
}

export default MemeGenerator;