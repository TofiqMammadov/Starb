import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailCategories = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3333/api/products") // Replace with your API endpoint
      .then(response => {
        const products = response.data;

        // Group products by category and pick the first product from each subcategory
        const groupedCategories = products.reduce((acc, product) => {
          const { category, subcategory } = product;
          if (!acc[category]) acc[category] = {};
          if (!acc[category][subcategory]) acc[category][subcategory] = product; // Pick the first product for each subcategory
          return acc;
        }, {});

        setCategories(groupedCategories);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="py-6 md:px-2 lg:px-8 ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Menu</h1>
      {Object.keys(categories).map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(categories[category]).map(subcategory => {
              const product = categories[category][subcategory];
              return (
                <Link
                  key={product.id}
                  to={`/menu/${product.subcategory}`}
                  className="flex items-center space-x-4"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={`http://localhost:3333/${product.productImage}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{
                        maxWidth: '100%', 
                        maxHeight: '100%' 
                      }}
                    />
                  </div>
                  <span className="text-sm sm:text-base font-medium">{product.subcategory}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailCategories;
