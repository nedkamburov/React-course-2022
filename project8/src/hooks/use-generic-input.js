import { useState } from "react";

const useGenericInput = (validateFunc) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateFunc(value);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value.trim())
  }

  const valueBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  }
}

export default useGenericInput;