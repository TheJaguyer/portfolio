import { useState } from 'react';
import styles from '@/styles/contact.module.css';

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
    <div className={styles.content}>
      <div className={styles.message} style={{ color: hovered ? 'white' : 'black' }}>
        {message}
      </div>
      <div className={styles.row}>
        <div className={styles.title}>contact me:</div>
        <div
          className={styles.email}
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
