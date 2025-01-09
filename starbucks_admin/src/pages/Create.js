import { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const history = useHistory();
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
      .post(`http://localhost:5000/api/products`, data)
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h1 className="formTitle">Create Product</h1>
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
          <label htmlFor="details">Details</label>
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

export default Edit;
