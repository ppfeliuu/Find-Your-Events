import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = '';
    order = 'date';

    state = { 
        eventos: []
     }

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.nombre}&categories=${search.categoria}&sort_by=${this.order}&token=${this.token}`;

        const eventos = await axios(url);

        // console.log(eventos.data.events);

        this.setState({
            eventos: eventos.data.events
        })
    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    getEvents: this.getEvents
                }}
                >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;
