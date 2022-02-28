import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isNotEmpty = (value) => value.trim().length !== 0;
const isLongEnough = (value) => value.trim().length >= 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postCode: true,
    city: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postCodeInputRef = useRef();
  const cityInputRef = useRef();



  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredPostCodeIsValid = isLongEnough(enteredPostCode);
    const enteredCityIsValid = isNotEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postCode: enteredPostCodeIsValid,
      city: enteredCityIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostCodeIsValid && enteredCityIsValid;
    if (!formIsValid) {
      return;
    }

    props.submitOrder()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={!formInputsValidity.name ? `${classes.control} ${classes.invalid}` : classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id='name' />
        {!formInputsValidity.name && <p>Please, enter a valid name.</p>}
      </div>
      <div className={!formInputsValidity.street ? `${classes.control} ${classes.invalid}` : classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id='street' />
        {!formInputsValidity.street && <p>Please, enter a valid street name.</p>}
      </div>
      <div className={!formInputsValidity.postCode ? `${classes.control} ${classes.invalid}` : classes.control}>
        <label htmlFor="postcode">Post Code</label>
        <input ref={postCodeInputRef} type="text" id='postcode' />
        {!formInputsValidity.postCode && <p>Please, enter a valid post code. (More than 5 characters)</p>}
      </div>
      <div className={!formInputsValidity.city ? `${classes.control} ${classes.invalid}` : classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id='city' />
        {!formInputsValidity.city && <p>Please, enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form >
  )
}

export default Checkout;