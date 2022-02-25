import useGenericInput from "../hooks/use-generic-input";

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    isValid: isFirstNameInputValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useGenericInput(value => value !== '');

  const {
    value: lastNameInput,
    isValid: isLastNameInputValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useGenericInput(value => value !== '');

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: emailInput,
    isValid: isEmailInputValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useGenericInput(value => emailRegex.test(value));

  let formIsValid = false;
  if (isFirstNameInputValid && isLastNameInputValid && isEmailInputValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(firstNameInput, lastNameInput, emailInput);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameInput} />
          {firstNameHasError && <p className="error-text">First name cannot be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameInput} />
          {lastNameHasError && <p className="error-text">Last name cannot be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailInput} />
        {emailHasError && <p className="error-text">Email has to be valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
