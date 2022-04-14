import React from 'react';
import EventsData from './EventsData';
import EventsItem from './EventsItem';

function PopularEvents(props) {
 
    return EventsData.map((e)=>{
        return(
            <EventsItem image={e.image} title={e.title} subtitle={e.subtitle} description={e.description}/>
        );
    })
}

export default PopularEvents;
