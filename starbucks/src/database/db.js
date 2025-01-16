// Home Cards Image
import homeCardImg1 from "../assets/images/home-card-1.jpg";
import homeCardImg2 from "../assets/images/home-card-2.jpg";
import homeCardImg3 from "../assets/images/home-card-3.png";

// Home Cards Data
const homeCards = [
  {
    id: 1,
    title: "The best of winter",
    content:
      "A new winter menu is here, featuring new Cortado alongside Pistachio beverages and Matcha Latte—now customized to your perfect level of sweetness.",
    cardImg: homeCardImg1,
    btnContent: "Add to order",
    btnTo: "menu/featured"
  },
  {
    id: 2,
    title: "From the birthplace of coffee",
    content:
      "With distinctive floral, tangerine and lemon balm notes, Single-Origin Ethiopia is a unique global favorite.",
    cardImg: homeCardImg2,
    btnContent: "Add to order",
    btnTo: "menu"
  },
  {
    id: 3,
    title: "Your free coffee awaits",
    content:
      "Unlock Rewards from the very first sip, starting with a free handcrafted drink with qualifying purchase during your first week.*",
    cardImg: homeCardImg3,
    btnContent: "Join now",
    btnTo: "account/create"
  },
];

// Menu Product Categories
const MenuProductCategoriesDrinks = [
  {
    id: 1,
    content: "Hot Coffees",
  },
  {
    id: 2,
    content: "Cold Coffees",
  },
  {
    id: 3,
    content: "Starbucks Beverages",
  },
  {
    id: 4,
    content: "Frappuccino® Blended",
  },
  {
    id: 5,
    content: "Iced Tea & Lemonade",
  },
  {
    id: 6,
    content: "Hot Teas",
  }
];

const MenuProductCategoriesFood = [
  {
    id: 1,
    content: "Breakfast",
  },
  {
    id: 2,
    content: "Bakery",
  },
  {
    id: 3,
    content: "Treats",
  },
  {
    id: 4,
    content: "Lunch",
  },
  {
    id: 5,
    content: "Snacks",
  }
];

const MenuProductCategoriesAtHomeCoffee = [
  {
    id: 1,
    content: "Whole Bean",
  },
  {
    id: 2,
    content: "VIA® Instant",
  },
];

const MenuProductCategoriesMerchandise = [
  {
    id: 1,
    content: "Cold Cups",
  },
  {
    id: 2,
    content: "Tumblers",
  },
  {
    id: 3,
    content: "Mugs",
  },
  {
    id: 4,
    content: "Water Bottles",
  },
  {
    id: 5,
    content: "Other",
  },
];


export {
  homeCards,
  MenuProductCategoriesDrinks,
  MenuProductCategoriesFood,
  MenuProductCategoriesAtHomeCoffee,
  MenuProductCategoriesMerchandise,
};
