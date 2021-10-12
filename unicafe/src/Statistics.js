import React from 'react';

const Statistics = ({text, number}) => (
  <tr key="text">
    <td>{text}</td>
    <td>{number} {text === 'positive' ? '%' : null}</td>
  </tr>
);

export default Statistics;
