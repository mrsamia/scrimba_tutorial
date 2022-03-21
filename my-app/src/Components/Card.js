import React from 'react';
import CardItems from './CardItems';


function Card(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <CardItems image={require("../images/catOne.webp")} alt='image'
                        name="Mr. Whiskerson"
                        Phone="(212) 555-1234"
                        Mail="mr.whiskaz@catnap.meow"
                    />
                </div>
                <div className='col-4'>
                    <CardItems image={require("../images/catOne.webp")} alt='image'
                        name="Pumpkin"
                        Phone="(0800) CAT KING"
                        Mail="pumpkin@scrimba.com"
                    />
                </div>
                <div className='col-4'>
                    <CardItems image={require("../images/catOne.webp")} alt='image'
                        name="Mr. Whiskerson"
                        Phone="(212) 555-1234"
                        Mail="mr.whiskaz@catnap.meow"
                    />
                </div>



            </div>

        </div>

    );
}

export default Card;