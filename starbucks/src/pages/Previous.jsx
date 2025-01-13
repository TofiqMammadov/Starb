import { Link } from 'react-router-dom';

function Previous() {
  return (
    <div className="previous-container">
      <p className="previous-title">Previous</p>
      <img
        src="https://www.starbucks.com/weblx/images/moon-phases.gif"
        alt="Moon Phases"
      />
      <p className="previous-subtitle">When history repeats itself</p>
      <p className="previous-description">
        Previous orders will appear here to quickly order again.
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

export default Previous;
