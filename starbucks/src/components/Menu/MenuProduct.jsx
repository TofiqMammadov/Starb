import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MenuProduct = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:5000/api/products`).then((res) => {
      const posts = res.data;
      setPosts(posts);
    });
  };
  console.log(posts);
  return (
    <section className="menu-product">
      <h2 className="menu-title">Menu</h2>
      <div className="row">
        <div className="product-cards">
          {posts.map((item) => {
            return (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <div className="product-card">
                  <img
                    src={`http://localhost:5000/${item.productImage}`}
                    alt=""
                  />
                  <span className="product-card-title">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuProduct;
