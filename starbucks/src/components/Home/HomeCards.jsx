import { Link } from "react-router-dom";
// Database
import { homeCards } from "../../database/db";
const HomeCards = () => {
  return (
    <div className="home-cards">
      {homeCards.map((item) => {
        return (
          <div className="home-card" key={item.id}>
            <img src={item.cardImg} alt={item.id} />
            <div className="card-contents">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-content">{item.content}</p>
              <Link to={item.btnTo}>
                <button className="home-card-btn">{item.btnContent}</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCards;
