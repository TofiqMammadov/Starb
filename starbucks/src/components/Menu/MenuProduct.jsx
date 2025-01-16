import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const MenuProduct = () => {
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

  const location = useLocation();
  const choosedCategory = decodeURIComponent(
    location.pathname.split("/")[2]
  ).toLowerCase();

  const filtered = posts.filter(
    (item) => item.subcategory.toLowerCase() === choosedCategory
  );

  return (
    <section className="menu-product">
      <h2 className="menu-title">Menu</h2>
      <div className="row">
        <div className="product-cards">
          {filtered.map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <div className="product-card">
                <img
                  src={`http://localhost:3333/${item.productImage}`}
                  alt={item.name}
                  className="product-card-image"
                />
                <span className="product-card-title">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {filtered.length === 0 && (
            <h2>
              No product found
              <span role="img" aria-label="sad">
                {" "}
                😢
              </span>
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuProduct;
