import { useState, useEffect } from 'react';
import styles from '@/styles/slider.module.css';

export default function Slider({ choice, exit, name, child }) {
  const [type, setType] = useState('hidden');
  useEffect(() => {
    if (choice == name) {
      setType('shown');
    } else {
      setType('hidden');
    }
  }, [choice]);
  return (
    <div onMouseLeave={() => exit(false)} className={`${styles.slider} ${styles[name]} ${styles[type]}`}>
      {child}
    </div>
  );
}
