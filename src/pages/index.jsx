import { useEffect, useState } from 'react';
import Slider from '@/components/Slider';
import Masks from '@/components/Masks';
import Option from '@/components/Option';
import AboutMeFill from '@/components/AboutMeFill';

export default function Home() {
  const [fade, setFade] = useState(false);

  const [choice, setChoice] = useState('none');

  useEffect(() => {
    setFade(true);
  }, []);

  function exit() {
    setChoice('none');
  }

  return (
    <main className="main">
      <div className="content">
        <Option name="name-option option" content="Jarrett" setSelected={() => setChoice('jarrett')} />
        <Option name="about-option option" content="about me" setSelected={() => setChoice('about')} />
        <Option name="projects-option option" content="projects" setSelected={() => setChoice('projects')} />
        <Slider choice={choice} exit={exit} name="about-slider" match="about" child={<AboutMeFill />} />
        <Slider choice={choice} exit={exit} name="projects-slider" match="projects" />
        <Slider choice={choice} exit={exit} name="name-slider" match="jarrett" />
        <Masks />
      </div>
    </main>
  );
}
