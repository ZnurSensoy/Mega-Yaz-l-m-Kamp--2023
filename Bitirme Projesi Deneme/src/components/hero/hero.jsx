import "./Hero.css";
// import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/img/play_icon.png";
import pause_icon from "../../assets/img/pause_icon.png";
import PropTypes from "prop-types";
const Hero = ({ setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      <div className="hero-text"></div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            style={{ width: "40px" }}
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>Videoyu İzle</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
Hero.propTypes = {
  heroCount: PropTypes.number.isRequired,
  setHeroCount: PropTypes.number,
  heroData: PropTypes.string,
  playStatus: PropTypes.string,
  setPlayStatus: PropTypes.string,
};