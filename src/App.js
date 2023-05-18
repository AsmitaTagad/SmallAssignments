import React, { useState } from 'react';
import './style.css';
import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
} from 'react-icons/ai';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <AiFillCaretLeft size="2rem" onClick={() => setCount(count + 10)} />
      </div>
      <div>
        <div>
          <AiFillCaretUp size="2rem" onClick={() => setCount(count + 1)} />
        </div>
        <div style={{ marginLeft: '0.7rem',fontWeight:"600",fontSize:"2rem" }}>   <p>{count}</p>
        </div>
        <div>
          <AiFillCaretDown size="2rem" onClick={() => setCount(count - 1)} />
        </div>
      </div>
      <div>
        <AiFillCaretRight size="2rem" onClick={() => setCount(count - 10)} />
      </div>
    </div>
  );
}
