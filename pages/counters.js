import React from 'react';
import Counter from '../components/Counters';

export default function CounterList() {
  const arrayOfCounters = [{ title: 'Brit' }, { title: 'Em' }, { title: 'Brit' }];
  return (
    arrayOfCounters.map((tl) => <Counter title={tl.title} />)
  );
  // return <Counter />;
}
