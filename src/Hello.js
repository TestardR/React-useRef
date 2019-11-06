import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const Hello = () => {
  /* const renders = useRef(0);
  console.log('hello renders: ', renders.current++); */
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{loading ? 'loading...' : data}</div>
      <button
        onClick={() => {
          setCount(currentCount => currentCount + 1);
        }}>
        Count
      </button>
    </div>
  );
};

export default Hello;
