import { useEffect, useRef, useState } from 'react';

export default function Magnetic({ text, size, offset, mousePos, setSelected }) {
  const [style, setStyle] = useState({});
  const el = useRef(null);

  function calcPull() {
    setStyle({
      left: `${Math.floor(offset[0] - el.current.clientWidth / 2)}px`,
      top: `${Math.floor(offset[1] - el.current.clientHeight / 2)}px`,
      transition: 'all 1s'
    });
  }

  useEffect(calcPull, [mousePos, offset]);

  return (
    <div
      ref={el}
      className={`absolute cursor-default bg-black text-white ${size}`}
      style={style}
      onMouseEnter={setSelected}
    >
      {text}
    </div>
  );
}
