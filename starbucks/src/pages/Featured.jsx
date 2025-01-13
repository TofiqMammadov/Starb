import React from 'react';
import data from '../assets/data/featureddata.json';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className="featured-container">
      <h1 className="featured-title">Inspiration found here</h1>
      <div className="featured-item-container">
        {data.products.map((item, index) => (
          <div
            key={index}
            className="featured-item"
            style={{ background: `${item.color}` }}
          >
            <img src={item.img} alt="" />
            <div className="featured-content">
              <p className="featured-title">{item.title}</p>
              <p className="featured-text">{item.text}</p>
              <button className="featured-button">
                <Link to="#">Order now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
