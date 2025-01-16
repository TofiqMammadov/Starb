import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div className="previous-container">
      <p className="previous-title">Favorite Products</p>
      <img
        src="https://www.starbucks.com/weblx/images/fav-tapes.png"
        alt="Moon Phases"
      />
      <p className="previous-subtitle">Save your favorite mixes</p>
      <p className="previous-description">
        Use the heart to save customizations. Your favorites will appear here to order again.
      </p>
      <div className="previous-buttons">
        <Link to="/signin">
          <button className="previous-button sign-in">Sign in</button>
        </Link>
        <Link to="/signup">
          <button className="previous-button join-now">Join now</button>
        </Link>

      </div>
    </div>
  );
}

export default Favorites;

