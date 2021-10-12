import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (reference) => {
    switch (reference) {
      case 'good':
        return () => setGood(good + 1);
      case 'neutral':
        return () => setNeutral(neutral + 1);
      default:
        return () => setBad(bad + 1);
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClick('good')} text='good' />
      <Button handleClick={handleClick('neutral')} text='neutral' />
      <Button handleClick={handleClick('bad')} text='bad' />
      <h1>Statistics</h1>
      <Statistics text={'good'} total={good} />
      <Statistics text={'neutral'} total={neutral} />
      <Statistics text={'bad'} total={bad} />
    </div>
  );
}

export default App;
