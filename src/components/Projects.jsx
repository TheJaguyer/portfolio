import { useState, useEffect } from 'react';

export default function AboutMe({ selected }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (selected == 'projects') {
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
      className="absolute bottom-0 right-0  h-10 w-10 border-t-4 border-l-4 border-white bg-black transition-all duration-300 ease-bounce  "
      style={style}
    ></div>
  );
}
