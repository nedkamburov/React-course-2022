import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (meal) => {
  const cartContext = useContext(CartContext);
  const { name, description, price: mealPrice, id } = meal.meal;
  const price = `€${mealPrice.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartContext.addItem({
      id,
      name,
      amount,
      price: mealPrice
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={id} onAddToCart={addToCartHandler} />
    </li>
  )
}

export default MealItem