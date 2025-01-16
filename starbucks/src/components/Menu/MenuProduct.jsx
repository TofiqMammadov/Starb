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
        <div className="flex flex-wrap gap-20 justify-between ">
          {filtered.map((item) => (
            <Link to={`/shop/${item.id}`} key={item.id} className="group">
              <div className="product-card w-24 sm:w-28 lg:w-40 flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-200 mb-2">
                  <img
                    src={`http://localhost:3333/${item.productImage}`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
                <span className="product-card-title w-full text-base font-normal text-wrap md:text-lg">
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
