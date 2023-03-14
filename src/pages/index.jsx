import { useRef, useEffect, useState } from 'react';
import Magnetic from '@/components/Magnetic';
import AboutMe from '@/components/AboutMe';
import Masks from '@/components/Masks';
import Projects from '@/components/Projects';

export default function Home() {
  const edgeRef = useRef(null);

  const [topLeft, setTopLeft] = useState([200, 200]);
  const [bottomRight, setBottomRight] = useState([400, 400]);
  const [bottomLeft, setBottomLeft] = useState([200, 400]);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [fade, setFade] = useState(false);

  const [choice, setChoice] = useState('none');

  useEffect(() => {
    setFade(true);
    getSize();
    window.addEventListener('resize', getSize);
  }, []);

  function getSize() {
    let x = edgeRef.current.clientWidth;
    let y = edgeRef.current.clientHeight;
    setTopLeft([x * 0.2 + 40, y * 0.2 + 40]);
    setBottomRight([x * 0.8 + 40, y * 0.8 + 40]);
    setBottomLeft([x * 0.2 + 40, y * 0.8 + 40]);
  }

  function trackMouse(e) {
    setMousePos([e.clientX, e.clientY]);
  }

  function chooseAboutMe() {
    setChoice('aboutme');
  }

  function chooseProjects() {
    setChoice('projects');
  }

  function chooseNone(e) {
    if (edgeRef.current == e.target && choice != 'none') {
      setChoice('none');
    }
  }

  return (
    <div className="h-screen w-full bg-black p-10" onMouseMove={(e) => trackMouse(e)}>
      <div
        className="h-full  border-4 border-white outline outline-[40px] outline-black"
        ref={edgeRef}
        onClick={(e) => chooseNone(e)}
      >
        <Magnetic offset={topLeft} text="Jarrett" size="text-6xl" mousePos={mousePos} />
        <Magnetic
          offset={bottomRight}
          text="projects"
          size="text-3xl"
          mousePos={mousePos}
          setSelected={chooseProjects}
        />
        <Magnetic offset={bottomLeft} text="about me" size="text-3xl" mousePos={mousePos} setSelected={chooseAboutMe} />
        <AboutMe selected={choice} />
        <Projects selected={choice} />

        <div
          className="absolute right-0 top-0 h-full w-full border-4 border-white bg-black  transition-all delay-200 duration-500 ease-in-out"
          style={fade ? { height: '0', width: '0' } : {}}
        ></div>

        <Masks />
      </div>
    </div>
  );
}
