import { useState, useEffect } from 'react';
import AboutMeFill from './AboutMeFill';

export default function AboutMe({ selected }) {
  const [style, setStyle] = useState({ fontSize: '0rem' });
  useEffect(() => {
    if (selected == 'aboutme') {
      setStyle({
        width: '50vw',
        height: '50vh',
        fontSize: '1rem'
      });
    } else {
      setStyle({ fontSize: '0rem' });
    }
  }, [selected]);
  return (
    <div
      id="aboutmeBox"
      className="absolute bottom-0 left-0 flex h-10 w-10 items-start justify-center overflow-hidden border-t-4 border-r-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      <AboutMeFill />
    </div>
  );
}
