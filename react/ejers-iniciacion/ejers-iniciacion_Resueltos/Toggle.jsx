'use client';
import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h3>Toggle</h3>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
          padding: '10px 20px'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Toggle;