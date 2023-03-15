import { useRef, useEffect, useState } from 'react';
import Magnetic from '@/components/Magnetic';
import AboutMe from '@/components/AboutMe';
import Masks from '@/components/Masks';
import Projects from '@/components/Projects';
import Jarrett from '@/components/Jarrett';

export default function Home() {
  const edgeRef = useRef(null);

  const [topLeft, setTopLeft] = useState([1000, 0]);
  const [bottomRight, setBottomRight] = useState([1000, 0]);
  const [bottomLeft, setBottomLeft] = useState([1000, 0]);
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

  function chooseAboutMe() {
    setChoice('aboutme');
  }

  function chooseProjects() {
    setChoice('projects');
  }

  function chooseJarrett() {
    setChoice('jarrett');
  }

  function chooseNone(e) {
    if (edgeRef.current == e.target && choice != 'none') {
      setChoice('none');
    }
  }

  return (
    <div className="h-screen w-full  bg-black p-10">
      <div
        className="h-full  border-4 border-white outline outline-[40px] outline-black"
        ref={edgeRef}
        onClick={(e) => chooseNone(e)}
      >
        <Magnetic offset={topLeft} text="Jarrett" size="text-6xl" setSelected={chooseJarrett} />
        <Magnetic offset={bottomRight} text="projects" size="text-3xl" setSelected={chooseProjects} />
        <Magnetic offset={bottomLeft} text="about me" size="text-3xl" setSelected={chooseAboutMe} />
        <AboutMe selected={choice} />
        <Projects selected={choice} />
        <Jarrett selected={choice} />

        <div
          className="absolute right-0 top-0 h-full w-full border-4 border-white bg-black  transition-all delay-200 duration-500 ease-in-out"
          style={fade ? { height: '0', width: '0' } : {}}
        ></div>

        <Masks />
      </div>
    </div>
  );
}
