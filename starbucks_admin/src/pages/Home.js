import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import Logo from '../images/logo.png'
const Home = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3333/api/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios("http://localhost:3333/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className="head">
        <h1 className="home-title">
          <Link to={"/"}>
      <img src={Logo} width={50} height={50} alt="" />
      </Link>
          Starbucks Product List</h1>
        <Link className="create-link" to="/create">Create new</Link>
      </div>

      <table className="table">
        <tr>
          <th>Product Img</th>
          <th>Product Name</th>
          <th>Calories</th>
          <th>Actions</th>
        </tr>

        {products?.map((product) => (
          <tr key={product.id}>
            <td>
              <img
                className="product-img"
                src={` http://localhost:3333/${product.productImage}`}
                alt={product.name}
              />
            </td>
            <td>
              <Link to={`/products/${product.id}`}> {product.name} </Link>
            </td>
            <td>{product.calories}</td>
            <td>
              <Link className="edit" to={`/edit/${product.id}`}>Edit</Link>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
