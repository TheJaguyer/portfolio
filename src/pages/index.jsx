import { useEffect, useState, useRef } from 'react';
import Slider from '@/components/Slider';
import Masks from '@/components/Masks';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import styles from '@/styles/index.module.css';

export default function Home() {
  const [fade, setFade] = useState(false);
  const container = useRef(null);

  const [choice, setChoice] = useState('none');

  useEffect(() => {
    setFade(true);
  }, []);

  function exit(e) {
    if ((choice != 'none' && e.target == container.current) || e == false) {
      setChoice('none');
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.content} ref={container} onTouchEnd={(e) => exit(e)}>
        <div className={`${styles.jarrett} ${styles.option}`} onMouseEnter={() => setChoice('jarrett')}>
          Jarrett
        </div>
        <div className={`${styles.about} ${styles.option}`} onMouseEnter={() => setChoice('about')}>
          about me
        </div>
        <div className={`${styles.projects} ${styles.option}`} onMouseEnter={() => setChoice('projects')}>
          projects
        </div>
        <Slider choice={choice} exit={exit} name="about" child={<AboutMe />} />
        <Slider choice={choice} exit={exit} name="projects" child={<Projects />} />
        <Slider choice={choice} exit={exit} name="jarrett" child={<Contact />} />
        <Masks />
      </div>
    </main>
  );
}
