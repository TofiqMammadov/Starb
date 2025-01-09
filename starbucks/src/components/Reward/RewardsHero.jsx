import { Link } from "react-router-dom";
const RewardsHero = () => {
  return (
    <div className="rewards-hero">
      <div className="rewards-hero-content">
        <h3>FREE COFFEE IS A TAP AWAY</h3>
        <p>Join now to start earning Rewards.</p>
        <Link to={"/signup"}>
          <button>Join now</button>
        </Link>
        <span>Or join in the app for the best experience</span>
      </div>
    </div>
  );
};

export default RewardsHero;
