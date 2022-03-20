import React from 'react';
import Component from './Component';
import Data from './Data';

function MainPage(props) {

    return Data.map((e) => {
        return (
            <Component
                img={e.imageUrl}
                location={e.location}
                googleMap={e.googleMapsUrl}
                title={e.title}
                date={e.Date}
                description={e.description}
            />
        );
    })
}

export default MainPage;