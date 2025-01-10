import { TextField } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Location() {
  return (
    <div className="location-container">
      <div className="location-left">
        <div className="search-bar">
          <TextField
            className="search-input"
            id="standard-basic"
            label="Find a store"
            variant="standard"
          />
          <button className="filter-button">Filter</button>
        </div>
        <div className="info-container">
          <p className="info-header">We are unable to access your exact location</p>
          <p className="info-text">
            To find a Starbucks store, use the search feature, navigate using the map, or turn on
            location services.
          </p>
        </div>
        <div className="links">
          <NavLink className="link">Privacy Notice opens in new window</NavLink>
          <NavLink className="link">Terms of Use opens in new window</NavLink>
          <NavLink className="link">Do Not Share My Personal Information opens in new window</NavLink>
        </div>
      </div>
      <div className="location-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122841.8971151705!2d45.11445876721265!3d40.15007293038535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaycan!5e0!3m2!1str!2saz!4v1684913466942!5m2!1str!2saz"
          className="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
