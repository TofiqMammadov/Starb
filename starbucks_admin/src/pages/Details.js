import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Details.css";
import Logo from "../images/logo.png"
const Details = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    axios(`http://localhost:3333/api/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.response.data));
  }, [productId]);

  if (error !== "") {
    return <h1>{error}</h1>;
  }
  if (!product) return null;

  return (
    <div className="product-details">
      <div className="head">
      <Link to={"/"}>
      <img src={Logo} width={50} height={50} alt="" />
      </Link>
        Product Details
        <Link to={`/edit/${product.id}`}>Edit</Link>
      </div>
      <div className="product-details-card">
      <img src={`http://localhost:3333/${product.productImage}`} alt="" />
      <h1>{product.name}</h1>
      <p>{product.calories}</p>
      </div>
    </div>
  );
};

export default Details;
