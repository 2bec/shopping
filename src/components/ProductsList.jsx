import React from 'react';

import { Card } from 'semantic-ui-react';

import Product from './Product';
import products from '../fixtures/products.json'


const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}


export default class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({data: products});
    }

    addToCart(e, name) {
        console.log('addToCart: ', e, name);
    }

    render() {
        const {data} = this.state

        return (
                <Card.Group>
                {
                    data.map(function (product) {
                        return (<Product key={product.id} id={product.id} name={product.name} stock={product.stock} price={product.price} category={product.meta}  description={product.description} condition={product.condition} />)
                    },this)
                }
                </Card.Group>
        );
    }

}
