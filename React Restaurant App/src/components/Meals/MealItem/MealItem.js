import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import cartContext from '../../../Store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  // console.log(props);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
