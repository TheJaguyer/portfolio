import styles from '@/styles/projects.module.css';

export default function Projects() {
  return (
    <div className={styles.content}>
      <div className={styles.title}>projects</div>
      {/* First Project */}
      <div>
        <div className={styles.row}>
          <a href="#" target="_blank" className={styles.link}>
            amazon clone
          </a>
          <a href="https://github.com/TheJaguyer/FEC-Amazon-Clone" target="_blank" className={styles.github}>
            view on github
          </a>
        </div>
        <div>
          A copy of an amazon product page for a controller, with minor styling improvements. Four person agile team,
          using Vite, React, PSQL, and Express.
        </div>
      </div>
      {/* Second Project */}
      <div>
        <div className={styles.row}>
          <a href="#" target="_blank" className={styles.link}>
            technical interview application
          </a>
          <a href="https://github.com/TheJaguyer/admissions-hub" target="_blank" className={styles.github}>
            view on github
          </a>
        </div>
        <div>
          A mock multipage application to track the status of technical interviewers, complete with functioning
          shared-coding space. Six person agile team, using NextJS, React, PSQL.
        </div>
      </div>
      {/* Third Project */}
      <div>
        <div className={styles.row}>
          <a href="https://thejaguyer.github.io/Pixel-Art-Maker/" target="_blank" className={styles.link}>
            pixel art maker
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
