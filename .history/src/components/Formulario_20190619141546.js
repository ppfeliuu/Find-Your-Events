import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';

class Fomulario extends Component {
    state = { 
        nombre: '',
        categoria: ''
     }
    render() { 
        return ( 
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Search by Name or Category
                    </legend>
                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input
                            name="nombre"
                            className="uk-input"
                            type="text"
                            placeholder="Event name or city"
                        />
                    </div>

                    <div className="uk-margin" uk-margin="true">
                        <select className="uk-select"
                            name="categoria">
                                <CategoriasConsumer>
                                    {(value) => {
                                        console.log(value);
                                    }}
                                </CategoriasConsumer>
                        </select>
                    </div>

                    <div className="uk-margin" uk-margin="true">
                        <input                            
                            className="uk-button uk-button-danger"
                            type="submit"
                            value="Search event"
                        />
                    </div>
                </div>

            </form>
         );
    }
}
 
export default Fomulario;