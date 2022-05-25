import React, { useContext } from 'react';
// import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  //TEMP DESC
  product.description = 'Insert Item description here';
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card>
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <div className={classes.root}>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${price}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={handleAddToCart}
            className={classes.addToCartIcon}
          >
            <AddShoppingCart onClick={addProductToCart} />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
