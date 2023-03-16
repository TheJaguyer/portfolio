import { useState, useEffect } from 'react';
import ProjectFill from '@/components/ProjectFill';

export default function AboutMe({ selected, exit }) {
  const [style, setStyle] = useState({ padding: '0', paddingRight: '0', paddingBottom: '0' });
  useEffect(() => {
    if (selected == 'projects') {
      setStyle({
        width: '54rem',
        maxWidth: '98vw',
        height: '28rem',
        minHeight: 'min-content',
        padding: '40px',
        paddingRight: '80px',
        paddingBottom: '80px'
      });
    } else {
      setStyle({ padding: '0', paddingRight: '0', paddingBottom: '0' });
    }
  }, [selected]);
  return (
    <div
      onMouseLeave={exit}
      className="absolute bottom-0 right-0 h-10 w-10  overflow-hidden border-t-4 border-l-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      <ProjectFill />
    </div>
  );
}
