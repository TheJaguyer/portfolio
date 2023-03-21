import styles from '@/styles/about.module.css';

export default function AboutMeFill() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>about me</div>

      <div>
        After being an Army Officer for 5 years, I chose to continue my dream of improving the lives of others. The
        world becomes more connected every day, leading to new joys and hidden challenges. I believe every problem can
        be overcome with the compassionate application of state-of-the-art technology.
      </div>

      <div>Please join my cat and I as we make this dream a reality.</div>

      <div className={styles.scrollContainer}>
        <div className={styles.scroller}>
          <div className={styles.scrollItem}>West Point Grad</div>
          <div className={styles.scrollItem}>Cat Dad</div>
          <div className={styles.scrollItem}>Particle Physicist</div>
          <div className={styles.scrollItem}>Avid Snowboarder</div>
          <div className={styles.scrollItem}>Mediocre Destiny 2 Player</div>
          <div className={styles.scrollItem}>Dark Mode Advocate</div>
          <div className={styles.scrollItem}>World Traveler</div>
          {/* must repeat to allow for smooth rotation */}
          <div className={styles.scrollItem}>West Point Grad</div>
          <div className={styles.scrollItem}>Cat Dad</div>
          <div className={styles.scrollItem}>Particle Physicist</div>
          <div className={styles.scrollItem}>Avid Snowboarder</div>
          <div className={styles.scrollItem}>Mediocre Destiny 2 Player</div>
          <div className={styles.scrollItem}>Dark Mode Advocate</div>
          <div className={styles.scrollItem}>World Traveler</div>
        </div>
      </div>

      <div className="flex w-full items-center justify-around">
        <a href="https://github.com/TheJaguyer" target="_blank" className="text-2xl text-gray-500 hover:text-white">
          github
        </a>
        <a
          href="https://www.linkedin.com/in/thejaguyer/"
          target="_blank"
          className="text-2xl text-gray-500 hover:text-white"
        >
          linkedin
        </a>

        <a href="#" download className="text-gray-500 hover:text-white" style={{ fontSize: '1.5em' }}>
          resume
        </a>
      </div>
    </div>
  );
}
