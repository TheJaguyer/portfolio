import { useState } from 'react';

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState('click to copy');

  function copy() {
    navigator.clipboard.writeText('guyer.jarrett@gmail.com');
    setMessage('copied!');
  }

  function handleEnter() {
    setHovered(true);
    setMessage('click to copy');
  }

  function handleLeave() {
    setHovered(false);
  }

  return (
    <div className="fillContainer">
      <div className="copyText" style={{ color: hovered ? 'white' : 'black' }}>
        {message}
      </div>
      <div className="linkRow">
        <div className="medium">contact me:</div>
        <div
          className="link medium"
          onClick={copy}
          onTouchEnd={copy}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          guyer.jarrett@gmail.com
        </div>
      </div>
    </div>
  );
}
