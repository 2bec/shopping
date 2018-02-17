import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

import ProductCard from './Card';
import products from '../fixtures/products.json'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1024,
    height: 'auto',
    overflowY: 'auto',
  },
  indvCell: {
    height: 'auto',
    borderRadius: 25,
  }
}

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
            <div style={styles.root}>
               <GridList
                  cellHeight={180}
                  style={styles.gridList}
               >
               {
                  this.state.data.map(function (product) {
                     return <GridTile key={product.id} style={styles.indvCell}>
                        <ProductCard
                           key={product.id}
                           name={product.name}
                           description={product.description}
                           meta={product.meta}
                           price={product.price}
                           condition={product.condition}
                           seller={product.seller}
                           avatar="http://via.placeholder.com/180x90"
                           image="http://via.placeholder.com/180x90"
                        />
                     </GridTile>
                  })
               }
               </GridList>
            </div>
         );
      }

      return (<span>Loading...</span>);
   }
}

export default ProductList;