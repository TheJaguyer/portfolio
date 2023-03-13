import { useState, useEffect } from 'react';

export default function AboutMe({ selected }) {
  const [style, setStyle] = useState({});
  const [text, setText] = useState('');
  useEffect(() => {
    if (selected == 'aboutme') {
      setStyle({
        width: '50vw',
        height: '50vh'
      });
    } else {
      setStyle({});
    }
  }, [selected]);
  return (
    <div
      className="color-white absolute bottom-0 left-0 h-10 w-10 border-t-4 border-r-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      {text}
    </div>
  );
}
