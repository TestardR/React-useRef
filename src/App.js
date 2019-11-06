import React, { useEffect, useState, useRef } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';
import { useFetch } from './useFetch';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);
  const hello = useRef(() => console.log('hello'));

  const inputRef = useRef();

  useEffect(() => {
    console.log('mount1');
  }, []);

  useEffect(() => {
    console.log('mount2');
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}>
        Toggle
      </button>
      {showHello && <Hello></Hello>}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}>
        REF
      </button>
    </div>
  );
}

export default App;
