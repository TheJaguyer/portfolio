import { useEffect, useRef, useState } from 'react';

export default function Magnetic({ text, size, offset, mousePos, setSelected }) {
  const [xDiff, setXDiff] = useState(0);
  const [yDiff, setYDiff] = useState(0);
  const [style, setStyle] = useState({});
  const el = useRef(null);

  function calcPull() {
    let dX = mousePos[0] - offset[0];
    let dY = mousePos[1] - offset[1];
    let hyp = Math.sqrt(dX * dX + dY * dY);
    let angle = Math.asin(dY / hyp);
    let pullFactor = curve(hyp);
    let xPull = pullFactor * Math.cos(angle);
    let yPull = pullFactor * Math.sin(angle);
    if (dX < 0) {
      xPull *= -1;
    }

    setXDiff(xPull);
    setYDiff(yPull);
    setStyle({
      left: `${Math.floor(offset[0] + xDiff - el.current.clientWidth / 2)}px`,
      top: `${Math.floor(offset[1] + yDiff - el.current.clientHeight / 2)}px`
    });
  }

  function curve(x) {
    if (x <= 100) {
      return (17 * x) / 15 - (x * x) / 300;
    } else {
      return 80;
    }
  }

  useEffect(calcPull, [mousePos, offset]);

  return (
    <div
      ref={el}
      className={`absolute cursor-default bg-black text-white  ${size}`}
      style={style}
      onClick={setSelected}
      onMouseEnter={setSelected}
    >
      {text}

      {/* <div className="mt-2 h-4 w-full rounded-lg bg-black">
        <div className="h-full w-0 rounded-lg bg-gray-500 transition-all ease-linear" style={{ width: 50 + '%' }}></div>
      </div> */}
    </div>
  );
}
