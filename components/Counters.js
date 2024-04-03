import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const handleClick = (action) => {
    // setValue((prevState) => prevState + 1);
    switch (action) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button type="button" onClick={() => handleClick('Increment')}>Increment</button>
      <button type="button" onClick={() => handleClick('Decrement')}>Decrement</button>
      <button type="button" onClick={() => handleClick('Reset')}>Reset</button>
    </>
  );
}

export default Counter;