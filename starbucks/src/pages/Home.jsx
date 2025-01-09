// React Helmet
import { Helmet } from "react-helmet";
// Components
import HomeCards from "../components/Home/HomeCards";
import HomeNote from "../components/Home/HomeNote";

const Home = () => {
  return (
    <section className="home">
      <Helmet>
        <title>Starbucks Coffee Company</title>
      </Helmet>
      <div className="container">
        <HomeCards />   
        <HomeNote />
      </div>
    </section>
  );
};

export default Home;
