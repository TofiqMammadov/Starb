import React, { useEffect, useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import axios from "axios";

const CoffeeOptional = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [shots, setShots] = useState(3);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleShotsChange = (increment) => {
    setShots((prev) => {
      const newValue = prev + increment;
      return newValue >= 1 && newValue <= 12 ? newValue : prev;
    });
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3333/api/products`).then((res) => {
      const posts = res.data;
      setPosts(posts);
    });
  };

  return (
    <section className="coffee-optional">
      <div className="container">
        <div className="row flex lg:flex-row lg:!items-start  flex-col !items-center">
          {/* Size Options - Unchanged */}
          <div className="size-options">
            <h2 className="size-options-title">Size options</h2>
            <div className="size-option">
              {["Short", "Tall", "Grande", "Venti"].map((size, index) => (
                <div
                  key={index}
                  className={`size ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  <div className="cup-icon">
                    <CiCoffeeCup />
                  </div>
                  <div className="size-title">
                    <p>{size}</p>
                  </div>
                  <div className="size-ft">
                    <p>{8 + index * 4} fl oz</p>
                  </div>
                </div>
              ))}
              {/* {posts.map((item) =>
                item.sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`size ${selectedSize === size.size ? "selected" : ""}`}
                    onClick={() => handleSizeSelect(size.size)}
                  >
                    <div className="cup-icon">
                      <CiCoffeeCup />
                    </div>
                    <div className="size-title">
                      <p>{size.size}</p>
                    </div>
                    <div className="size-ft">
                      <p>{size.capacity}</p>
                    </div>
                  </div>
                ))
              )} */}
            </div>
          </div>

          {/* Customizations Section */}
          <div className="customizations">
            <h2 className="customizations-title">What's included</h2>

            <div className="customization-wrapper">
              <select defaultValue="Whole Milk" className="customization-item">
                <option>Heavy Cream</option>
                <option>Nondiary Vanilla Sweet Cream</option>
                <option>Vanilla Sweet Cream</option>
                <option>Nonfat Milk</option>
                <option>2% Milk</option>
                <option>Whole Milk</option>
                <option>Breve</option>
                <option>Almond</option>
                <option>Coconut</option>
                <option>Oatmilk</option>
                <option>Soy</option>
                <span className="category-label">Milk</span>
              </select>

              <select defaultValue="Steamed" className="customization-item">
                <option>Warm</option>
                <option>Steamed</option>
                <option>Extra Hot</option>
                <span className="category-label">Milk</span>
              </select>

              <select defaultValue="Foam" className="customization-item">
                <option>Foam</option>
                <option>Extra Foam</option>
                <option>Light Foam</option>
                <option>No Foam</option>
                <span className="category-label">Milk</span>
              </select>

              {/* Shots Counter */}
              <div className="customization-item shots">
                {/* <span className="category-label">Espresso & Shot Options</span> */}
                <div className="shots-wrapper">
                  <span className="shots-label">Shots</span>
                  <div className="shots-control">
                    <button
                      onClick={() => handleShotsChange(-1)}
                      disabled={shots <= 1}
                      className="control-button"
                    >
                      −
                    </button>
                    <span className="shots-count">{shots}</span>
                    <button
                      onClick={() => handleShotsChange(1)}
                      disabled={shots >= 12}
                      className="control-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <select
                defaultValue="Blonde Espresso"
                className="customization-item"
              >
                <option>Signature Espresso</option>
                <option>Blonde Espresso</option>
                <option>Decaf Espresso Roast</option>
                <option>1/3 Decaf</option>
                <option>1/2 Decaf</option>
                <option>2/3 Decaf</option>
                <span className="category-label">Espresso & Shot Options</span>
              </select>

              <select defaultValue="Ristretto" className="customization-item">
                <option>Ristretto</option>
                <option>Long Shot</option>
                <span className="category-label">Espresso & Shot Options</span>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeOptional;
