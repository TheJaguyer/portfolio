import { useState, useEffect } from 'react';
import AboutMeFill from './AboutMeFill';

export default function AboutMe({ selected, exit }) {
  const [style, setStyle] = useState({ padding: '0', paddingLeft: '0', paddingBottom: '0' });
  useEffect(() => {
    if (selected == 'aboutme') {
      setStyle({
        width: '54rem',

        maxWidth: '98vw',
        height: '28rem',
        padding: '40px',
        paddingLeft: '80px',
        paddingBottom: '80px'
      });
    } else {
      setStyle({ padding: '0', paddingLeft: '0', paddingBottom: '0' });
    }
  }, [selected]);
  return (
    <div
      onMouseLeave={exit}
      className="absolute bottom-0 left-0 h-10 w-10 overflow-hidden border-t-4 border-r-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      <AboutMeFill />
    </div>
  );
}
