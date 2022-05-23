import React from 'react';
import Product from '../Product/Product';
import useStyles from './styles';

const ProductCardContainer = ({ product }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Product product={product} />
    </main>
  );
};

export default ProductCardContainer;
