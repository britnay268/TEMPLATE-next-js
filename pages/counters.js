import React from 'react';
import Counter from '../components/Counters';

export default function CounterList() {
  const arrayOfCounters = ['Brit', 'Em', 'Summah'];
  return (
    arrayOfCounters.map(() => <Counter />)
  );
  // return <Counter />;
}
