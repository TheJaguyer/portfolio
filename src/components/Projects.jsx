import styles from '@/styles/projects.module.css';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className={styles.content}>
      <div className={styles.title}>projects</div>
      {/* Latest */}
      <div>
        <div className={styles.row}>
          <div className={styles.subtitle}>Logico: Simple Logic Game</div>

          <Link href="/Logico" target="_blank" className={styles.github}>
            try it out
          </Link>
        </div>
        <div>
          A simple logic diagramming tool made in Unity with C#, made with the goal of learning Unity and a new
          language.
        </div>
      </div>
      {/* First Project */}
      <div>
        <div className={styles.row}>
          <div className={styles.subtitle}>technical interview application</div>

          <a href="https://github.com/TheJaguyer/admissions-hub" target="_blank" className={styles.github}>
            view on github
          </a>
        </div>
        <div>
          A mock multipage application to track the status of technical interviews, complete with a functioning
          shared-coding space. Six person agile team, using NextJS, React, Docker, and PSQL.
        </div>
      </div>

      {/* Second Project */}
      <div>
        <div className={styles.row}>
          <div className={styles.subtitle}>amazon clone</div>

          <a href="https://github.com/TheJaguyer/FEC-Amazon-Clone" target="_blank" className={styles.github}>
            view on github
          </a>
        </div>
        <div>
          A copy of an amazon product page for a controller, with minor styling improvements. Four person agile team,
          using Vite, React, PSQL, and Express.
        </div>
      </div>
      {/* Third Project */}
      <div>
        <div className={styles.row}>
          <div className={styles.subtitle}>pixel art maker</div>
          <a href="https://thejaguyer.github.io/Pixel-Art-Maker/" target="_blank" className={styles.link}>
            view live
          </a>
          <a href="https://github.com/TheJaguyer/Pixel-Art-Maker" target="_blank" className={styles.github}>
            view on github
          </a>
        </div>
        <div>First completed project. Create pixel art, and save your artwork to localstorage. Raw javascript. </div>
      </div>
    </div>
  );
}
