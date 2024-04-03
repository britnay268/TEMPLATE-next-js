import { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ title }) {
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
      <h1>Counter for {title}</h1>
      <h2>{value}</h2>
      <button type="button" className={value <= 0 ? 'btn btn-danger' : 'btn btn-success'} onClick={() => handleClick('Increment')}>Increment</button>
      {value === 0 ? '' : <button type="button" className="btn btn-danger" onClick={() => handleClick('Decrement')}>Decrement</button>}
      <button type="button" className="btn btn-primary" onClick={() => handleClick('Reset')}>Reset</button>
    </>
  );
}

export default Counter;

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'an Individual',
};
