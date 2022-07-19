import { useState } from 'react';

const btnStyle = {
  height: '32px',
  width: '32px',
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <button onClick={() => setCount(count - 1)} style={btnStyle}>
        -{' '}
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>
        {' '}
        +{' '}
      </button>
    </div>
  );
};

export default Counter;
