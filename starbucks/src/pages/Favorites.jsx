function Favorites() {
  return (
    <div className="favorites-container">
      <p className="favorites-title">Favorite Products</p>
      <img 
        className="favorites-image" 
        src="https://www.starbucks.com/weblx/images/fav-tapes.png" 
        alt="Favorite Products"
      />
      <p className="favorites-subtitle">Save your favorite mixes</p>
      <p className="favorites-description">
        Use the heart to save customizations. Your favorites will appear here to order again.
      </p>
      <div className="favorites-buttons">
        <button className="favorites-button sign-in">Sign in</button>
        <button className="favorites-button join-now">Join now</button>
      </div>
    </div>
  );
}

export default Favorites;
