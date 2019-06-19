import React from 'react';

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

            </form>
         );
    }
}
 
export default Fomulario;