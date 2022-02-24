import { useEffect, useState } from "react";

const useCounter = (isNegative = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNegative) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;

};

export default useCounter;