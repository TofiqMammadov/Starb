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
    <section className="menu-product py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="menu-title text-2xl sm:text-3xl font-bold mb-6">Menu</h2>
      <div className="row">
        <div className="flex flex-wrap gap-4 ">
          {filtered.map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id} className="group">
              <div className="product-card flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-gray-200 mb-2">
                  <img
                    src={`http://localhost:3333/${item.productImage}`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
                <span className="product-card-title text-sm sm:text-base font-medium">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {filtered.length === 0 && (
            <h2 className="text-center text-lg font-medium mt-6">
              No product found{" "}
              <span role="img" aria-label="sad">
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
