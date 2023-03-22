export default function AboutMe() {
  return (
    <div className="fillContainer">
      <div className="title">about me</div>

      <div>
        After being an Army Officer for 5 years, I chose to continue my dream of improving the lives of others. The
        world becomes more connected every day, leading to new joys and hidden challenges. I believe every problem can
        be overcome with the compassionate application of state-of-the-art technology.
      </div>

      <div>Please join my cat and I as we make this dream a reality.</div>

      <div className="scrollContainer">
        <div className="scroller">
          <div className="scrollItem">West Point Grad</div>
          <div className="scrollItem">Cat Dad</div>
          <div className="scrollItem">Particle Physicist</div>
          <div className="scrollItem">Avid Snowboarder</div>
          <div className="scrollItem">Mediocre Destiny 2 Player</div>
          <div className="scrollItem">Dark Mode Advocate</div>
          <div className="scrollItem">World Traveler</div>
          {/* must repeat to allow for smooth rotation */}
          <div className="scrollItem">West Point Grad</div>
          <div className="scrollItem">Cat Dad</div>
          <div className="scrollItem">Particle Physicist</div>
          <div className="scrollItem">Avid Snowboarder</div>
          <div className="scrollItem">Mediocre Destiny 2 Player</div>
          <div className="scrollItem">Dark Mode Advocate</div>
          <div className="scrollItem">World Traveler</div>
        </div>
      </div>

      <div className="linkRow">
        <a href="https://github.com/TheJaguyer" target="_blank" className="link medium">
          github
        </a>
        <a href="https://www.linkedin.com/in/thejaguyer/" target="_blank" className="link medium">
          linkedin
        </a>

        <a href="#" download className="link medium">
          resume
        </a>
      </div>
    </div>
  );
}
