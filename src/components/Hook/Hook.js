import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const usePrevious = value => {
  const prev = useRef();

  useEffect(() => {
    // console.log(value);
    prev.current = value;
  }, [value]);

  return prev.current;
};
const Hook = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <div>
      <h2>Custom Hook</h2>
      <h1>
        Count: {count} Previous: {previous}
      </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Hook;
