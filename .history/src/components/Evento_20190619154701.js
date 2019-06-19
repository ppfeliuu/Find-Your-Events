import React from 'react';

const Evento = ({evento}) => {


    return ( 
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                {evento.logo ? <img src={evento.logo.url} alt={evento.name} /> : null }
            </div>
        </div>
     );
}
 
export default Evento;
