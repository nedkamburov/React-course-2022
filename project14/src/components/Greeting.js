import React, { useState } from 'react'
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <>
      <div>Hello World</div>
      {!changedText && <Output> It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  )
}

export default Greeting;