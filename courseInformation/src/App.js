import React from 'react';
import Content from './Course Information/Content';
import Header from './Course Information/Header';
import Total from './Course Information/Total';

const App = () => {
  const course = 'Half Stack application development';
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts = {parts} />
    </div>
  );
};

export default App;
