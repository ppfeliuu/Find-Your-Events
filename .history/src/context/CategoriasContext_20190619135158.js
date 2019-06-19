import React, { Component } from 'react';
import axios from 'axios';
import { async } from 'q';


const CategoriasContext = React.createContext();

export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'MR4EJJQYY3VWGSDP2S';

    state = {  }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=?es_ES`;

        let categorias = await axios.get(url);

        console.log(categorias);
    }

    render() { 
        return (  );
    }
}
 
export default CategoriasProvider;