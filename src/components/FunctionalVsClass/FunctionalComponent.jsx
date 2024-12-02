import React, { useState } from 'react';

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default FunctionalComponent;
