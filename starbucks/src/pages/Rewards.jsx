// React Helmet
import { Helmet } from "react-helmet";
// Components
import RewardsBanner from "../components/Reward/RewardsBanner";
import RewardsHero from "../components/Reward/RewardsHero";

const Rewards = () => {
  return (
    <div className="rewards">
      <Helmet>
        <title>Starbucks® Rewards</title>
      </Helmet>
      <RewardsBanner />
      <RewardsHero />
      <div className="container"></div>
    </div>
  );
};

export default Rewards;
