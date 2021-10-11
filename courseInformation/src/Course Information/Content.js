import React from 'react';
import Part from './Part';

const Content = (props) => {
  const partsJSX = props.parts.map((part, index) => 
    <Part key={index} name={part.name} exercises={part.exercises} />
  );

  return (
    <div>
      {partsJSX}
    </div>
  );
};

export default Content;