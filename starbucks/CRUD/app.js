const express = require("express");
const Joi = require("joi");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/*********MIDDLEWARE**********/

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/*********ROUTES**********/

const products = [
  {
    id: "1",
    name: "Product Name 1",
    price: 10.9,
    details: "Product details: Lorem ipsum dolar sit amet",
    featured: true,
    productImage: "uploads/grid.jpg",
  },
  {
    id: "2",
    name: "Product Name 2",
    price: 22.9,
    details: "Product details: Lorem ipsum dolar sit amet",
    featured: false,
    productImage: "uploads/grid.jpg",
  },
  {
    id: "3",
    name: "Product Name 3",
    price: 23.0,
    details: "Product details: Lorem ipsum dolar sit amet",
    featured: true,
    productImage: "uploads/grid.jpg",
  },
];

/***********************************************************/
/********* GET: ALL PRODUCTS **********/
/***********************************************************/

app.get("/api/products", (req, res) => {
  res.send(products);
});

/***********************************************************/
/********* GET: SINGLE PRODUCT **********/
/***********************************************************/

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  res.send(product);
});

/***********************************************************/
/********* POST: ADD PRODUCT **********/
/***********************************************************/

app.post("/api/products", upload.single("productImage"), (req, res) => {
  //validate product
  const { error } = validateProduct({
    ...req.body,
    productImage: req.file?.path,
  });

  if (error) return res.status(400).send(error);

  const product = {
    id: uuidv4(),
    name: req.body.name,
    details: req.body.details,
    price: req.body.price,
    featured: req.body.featured,
    productImage: req.file.path,
  };

  products.push(product);
  res.send(product);
});

/***********************************************************/
/********* PUT: UPDATE PRODUCT **********/
/***********************************************************/

app.put("/api/products/:id", upload.single("productImage"), (req, res) => {
  //Find product
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }

  const { error } = validateUpdateProduct({
    ...req.body,
  });

  if (error) return res.status(400).send(error);

  product.name = req.body.name;
  product.details = req.body.details;
  product.price = req.body.price;
  product.featured = req.body.featured;
  if (req.file) {
    product.productImage = req.file.path;
  }

  res.send(product);
});

/***********************************************************/
/********* DELETE: DELETE PRODUCT **********/
/***********************************************************/

app.delete("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  const index = products.indexOf(product);
  products.splice(index, 1);

  res.send(products);
});

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    details: Joi.string().min(3).max(200).required(),
    price: Joi.number().required(),
    featured: Joi.boolean().required(),
    productImage: Joi.string().required(),
  });

  return schema.validate(product);
}

function validateUpdateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    details: Joi.string().min(3).max(200).required(),
    price: Joi.number().required(),
    featured: Joi.boolean().required(),
    productImage: Joi.string(),
  });

  return schema.validate(product);
}

/********* PORT **********/
//To set PORT run set/export PORT=YOUR_VALUE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
