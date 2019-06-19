import React, { Component } from 'react';
import { async } from 'q';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'MKZWK4ABOBPSGJPETSKF';
    order = 'date';

    state = {  }

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.nombre}&categories=${search.categoria}&sort_by=${order}&token=${this.token}`;
    }
    render() { 
        return (  );
    }
}
 
export default EventosProvider;