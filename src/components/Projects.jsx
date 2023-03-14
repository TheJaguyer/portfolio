import { useState, useEffect } from 'react';
import ProjectFill from '@/components/ProjectFill';

export default function AboutMe({ selected }) {
  const [style, setStyle] = useState({ fontSize: '0rem' });
  useEffect(() => {
    if (selected == 'projects') {
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
      className="absolute bottom-0 right-0  flex h-10 w-10 items-start justify-center border-t-4 border-l-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      <ProjectFill />
    </div>
  );
}
