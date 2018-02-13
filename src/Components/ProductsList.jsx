import React from 'react';
import Card from './Card';
import products from '../fixtures/products.json'

class ProductList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.setState({data: products});
	}

	render() {
		if (this.state.data.length > 0) {
			return (
				<div>
					<h1>Products List</h1>
					{
						this.state.data.map(function (product) {
							return <Card 
									key={product.id}
									name={product.name}
									description={product.description}
									meta={product.meta}
									price={product.price}
									condition={product.condition}
									seller={product.seller}
									image="http://via.placeholder.com/350x180"
							/>
						})
					}
				</div>
			);
		}

		return (<span>Loading...</span>);
	}
}
 
export default ProductList;