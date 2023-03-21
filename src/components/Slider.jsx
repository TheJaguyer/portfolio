import { useState, useEffect } from 'react';

export default function AboutMe({ choice, exit, name, match, child }) {
  const [style, setStyle] = useState('slider-hidden');
  useEffect(() => {
    if (choice == match) {
      setStyle('slider-shown');
    } else {
      setStyle('slider-hidden');
    }
  }, [choice]);
  return (
    <div onMouseLeave={exit} className={`slider ${style} ${name}`}>
      {child}
    </div>
  );
}
