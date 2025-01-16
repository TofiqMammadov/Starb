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
    name: "Cortado",
    price: 2.95,
    details: "Our signature medium-roasted coffee with notes of chocolate and toasted nuts",
    featured: true,
    productImage: "./uploads/cortado.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "5 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "10 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "15 calories"
      }
    ]
  },
  {
    id: "2",
    name: "Brown Sugar Oatmilk Cortado",
    price: 3.25,
    details: "Espresso shots topped with hot water",
    featured: false,
    productImage: "./uploads/browncortado.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "5 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "10 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "15 calories"
      }
    ]
  },
  {
    id: "3",
    name: "Cafe Americano",
    price: 4.15,
    details: "Black tea infused with cinnamon, clove, and other warming spices",
    featured: true,
    productImage: "./uploads/cafeamericano.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "120 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "190 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "240 calories"
      }
    ]
  },
  {
    id: "4",
    name: "Single-Origin Ethiopia",
    price: 2.95,
    details: "A bright blend of black tea flavored with bergamot and lavender",
    featured: false,
    productImage: "./uploads/singleoriginethiopia.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "0 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      }
    ]
  },
  {
    id: "5",
    name: "Featured Dark Roast",
    price: 3.45,
    details: "Steamed milk and mocha sauce topped with sweetened whipped cream",
    featured: true,
    productImage: "./uploads/featuredarkroast.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "190 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "250 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "320 calories"
      }
    ]
  },
  {
    id: "6",
    name: "Cappuciono",
    price: 2.75,
    details: "Freshly steamed 100% apple juice",
    featured: false,
    productImage: "./uploads/cappucino.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Short",
        capacity: "8 fl oz",
        calories: "120 calories"
      },
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "180 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "220 calories"
      }
    ]
  },
  {
    id: "7",
    name: "Espresso",
    price: 4.95,
    details: "Caramel syrup meets coffee, milk and ice",
    featured: true,
    productImage: "./uploads/espresso.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "280 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "380 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "420 calories"
      }
    ]
  },
  {
    id: "8",
    name: "Caramel Brulee Latte",
    price: 4.95,
    details: "Mocha sauce, Frappuccino® roast coffee, milk and ice",
    featured: false,
    productImage: "./uploads/caramellatte.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "290 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "400 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "440 calories"
      }
    ]
  },
  {
    id: "9",
    name: "Caffe Latte",
    price: 3.95,
    details: "Slow-steeped, super-smooth cold brew coffee",
    featured: true,
    productImage: "./uploads/caffelatte.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "5 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "5 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "10 calories"
      }
    ]
  },
  {
    id: "10",
    name: "Caramel Macchiato",
    price: 4.45,
    details: "Smooth cold brew coffee infused with nitrogen",
    featured: true,
    productImage: "./uploads/caramelmachiato.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "5 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "5 calories"
      }
    ]
  },
  {
    id: "11",
    name: "Caffe Mocha",
    price: 2.95,
    details: "Premium black tea sweetened just right and shaken with ice",
    featured: false,
    productImage: "./uploads/caffemocha.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "30 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "45 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "60 calories"
      }
    ]
  },
  {
    id: "12",
    name: "White Chocolate Mocha",
    price: 3.45,
    details: "Green tea blended with mint, lemongrass and lemonade",
    featured: true,
    productImage: "./uploads/whitechocolatemocha.jpg",
    category: "Drinks",
    subcategory: "Hot Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "90 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "120 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "160 calories"
      }
    ]
  },
  {
    id: "13",
    name: "Chocolate Cream Cold Brew",
    price: 2.95,
    details: "Freshly squeezed lemonade",
    featured: false,
    productImage: "./uploads/chocolatecreamcoldbrew.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "120 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "160 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "200 calories"
      }
    ]
  },
  {
    id: "14",
    name: "Pistachio Cream Cold Brew",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/pistachiocreamcoldbrew.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "15",
    name: "Vanilla Sweet Cream Cold Brew",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/vanillasweetcreamcoldbrew.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "16",
    name: "Nondiary Vanilla Sweet Cream Cold Brew",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/nondiaryvanillasweetcreamcoldbrew.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "17",
    name: "Vanilla Sweet Cream Nitro Cold Brew",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/vanillasweetcreamnitrocoldbrew.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "18",
    name: "Iced Caffe Americano",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedamericano.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "19",
    name: "Iced Coffee",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedcoffee.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "20",
    name: "Iced Shaken Espresso",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedshakenespresso.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "21",
    name: "Iced Caramel Brulée Latte",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedcaramelbruleelatte.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "22",
    name: "Iced Caffe Latte",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedcaffelatte.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "23",
    name: "Iced White Chocolate Mocha",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/icedwhitechocolatemocha.jpg",
    category: "Drinks",
    subcategory: "Cold Coffees",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "24",
    name: "Pineapple Passionfruit Refreshers Lemonade",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/pineapplepassionfruitrefresherslemonade.jpg",
    category: "Drinks",
    subcategory: "Starbucks Beverages",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "25",
    name: "Frozen Mango Dragonfruit Refresher Lemonade",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/frozenmangodragonfruitrefresherlemonade.jpg",
    category: "Drinks",
    subcategory: "Starbucks Beverages",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "26",
    name: "Paradise Drink",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/paradisedrink.jpg",
    category: "Drinks",
    subcategory: "Starbucks Beverages",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "27",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Starbucks Beverages",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },
  {
    id: "28",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Frapuccino Blended",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "29",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Frapuccino Blended",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "30",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Frapuccino Blended",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "31",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Frapuccino Blended",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
  },{
    id: "32",
    name: "Strawberry Acai Refresher",
    price: 0.00,
    details: "Fresh filtered water with ice",
    featured: false,
    productImage: "./uploads/strawberryacairefresher.jpg",
    category: "Drinks",
    subcategory: "Frapuccino Blended",
    sizes: [
      {
        size: "Tall",
        capacity: "12 fl oz",
        calories: "0 calories"
      },
      {
        size: "Grande",
        capacity: "16 fl oz",
        calories: "0 calories"
      },
      {
        size: "Venti",
        capacity: "24 fl oz",
        calories: "0 calories"
      }
    ]
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
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
