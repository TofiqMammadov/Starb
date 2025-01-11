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
        <span>Or <Link to={"https://www.starbucks.com/rewards/mobile-apps/"}>join in the app</Link> for the best experience</span>
      </div>
    </div>
  );
};

export default RewardsHero;
