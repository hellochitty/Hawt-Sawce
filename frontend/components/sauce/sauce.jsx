import React from 'react';




const Sauce= ({sauce}) => {

  return(
    <div>
      hello
      <h1>{sauce.name}</h1>
      <h2>{sauce.company}</h2>
      <h3>{sauce.scoville_units} SHU</h3>
      <h4>{sauce.description}</h4>
    </div>
  );
};


export default Sauce;
