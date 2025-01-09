import { useState, useEffect } from "react";
import "./Create.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const { productId } = useParams();

  const [state, setState] = useState({
    name: "",
    calories: "",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleProductImage = (e) => {
    const image = e.target.files[0];

    if (image) {
      setProductImage(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
    }
  };

  const handlChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, calories } = state;
    const data = new FormData();

    data.append("name", name);
    data.append("calories", calories);
    data.append("productImage", productImage);

    axios
      .put(`http://localhost:5000/api/products/${productId}`, data)
      .then((res) => history.push(`/products/${productId}`))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        setState({
          name: res.data.name,
          calories: res.data.calories,
        });
        setPreviewImage(`http://localhost:5000/${res.data.productImage}`);
      })
      .catch((err) => console(err));
  }, [productId]);

  return (
    <div className="form-container">
      <h1>Edit Product</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handlChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="details">Calories</label> 
          <textarea
            name="calories"
            id="details"
            value={state.calories}
            onChange={handlChange}
          />
        </div>
        {previewImage && (
          <img className="preview-image" src={previewImage} alt="preview" />
        )}
        <div className="form-control">
          <label htmlFor="productImage">Select image</label>
          <input
            type="file"
            name="productImage"
            id="productImage"
            accept="image/png, image/jpeg"
            onChange={handleProductImage}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
