import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const [isBtnHightlighted, setIsBtnHightlighted] = useState(false);
  const btnClasses = `${classes.button} ${isBtnHightlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsBtnHightlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHightlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [cartContext.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>

  )
}

export default HeaderCartButton;