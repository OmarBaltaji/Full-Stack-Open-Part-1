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

  let sum = good + neutral + bad;
  let avg = (good + neutral*0 + bad*-1)/sum;
  let positivePercentage = good/sum*100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClick('good')} text='good' />
      <Button handleClick={handleClick('neutral')} text='neutral' />
      <Button handleClick={handleClick('bad')} text='bad' />
      <h1>Statistics</h1>
      <Statistics text={'good'} number={good} />
      <Statistics text={'neutral'} number={neutral} />
      <Statistics text={'bad'} number={bad} />
      <Statistics text={'all'} number={sum} />
      <Statistics text={'average'} number={avg} />
      <Statistics text={'positive'} number={positivePercentage} />
    </div>
  );
}

export default App;
