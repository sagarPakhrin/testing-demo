import { useState } from 'react';
import Button from '../button/button';

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
      <Button onClick={() => setCount(count - 1)} label="-" />
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)} label="+" />
    </div>
  );
};

export default Counter;
