import { useState, useEffect } from 'react';

export default function AboutMe({ selected }) {
  const [style, setStyle] = useState({ padding: '0', paddingRight: '0', paddingTop: '0' });
  useEffect(() => {
    if (selected == 'themes') {
      setStyle({
        width: '50vw',
        height: '20vh',
        padding: '40px',
        paddingRight: '80px',
        paddingTop: '80px'
      });
    } else {
      setStyle({ padding: '0', paddingRight: '0', paddingTop: '0' });
    }
  }, [selected]);

  function changeMode() {
    document.body.classList.toggle('dark');
  }

  return (
    <div
      id="aboutmeBox"
      className="absolute top-0 right-0 h-10 w-10 overflow-hidden border-b-4 border-l-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
    >
      <input type="checkbox" name="mode" id="dark" onChange={changeMode} />
    </div>
  );
}
