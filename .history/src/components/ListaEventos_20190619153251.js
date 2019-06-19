import React from 'react';
import { EventosConsumer } from '../context/EventosContext';

const ListaEventos = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value) => {
                    return(<p>Hi</p>)
                }}
            </EventosConsumer>
            
        </div>
     );
}
 
export default ListaEventos;