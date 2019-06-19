import React, { Component } from 'react';
import axios from 'axios';
import { async } from 'q';


const CategoriasContext = React.createContext();

export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'MKZWK4ABOBPSGJPETSKF';

    state = {  }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=?es_ES`;

        let categorias = await axios.get(url);

        console.log(categorias.data.categories);
    }

    render() { 
        return ( 
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}

            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;