// Home Cards Image
import homeCardImg1 from "../assets/images/home-card-1.jpg";
import homeCardImg2 from "../assets/images/home-card-2.jpg";
import homeCardImg3 from "../assets/images/home-card-3.png";
// Giftcards Images
import giftcardImg_1 from "../assets/images/giftcard-1.png";
import giftcardImg_2 from "../assets/images/giftcard-2.png";
import giftcardImg_3 from "../assets/images/giftcard-3.png";
import giftcardImg_4 from "../assets/images/giftcard-4.png";
import giftcardImg_5 from "../assets/images/giftcard-5.png";
import giftcardImg_6 from "../assets/images/giftcard-6.png";
import giftcardImg_7 from "../assets/images/giftcard-7.png";
import giftcardImg_8 from "../assets/images/giftcard-8.png";
import giftcardImg_9 from "../assets/images/giftcard-9.png";
import giftcardImg_10 from "../assets/images/giftcard-10.png";
import giftcardImg_11 from "../assets/images/giftcard-11.png";
import giftcardImg_12 from "../assets/images/giftcard-12.png";
import giftcardImg_13 from "../assets/images/giftcard-13.png";
import giftcardImg_14 from "../assets/images/giftcard-14.png";
import giftcardImg_15 from "../assets/images/giftcard-15.png";
import giftcardImg_16 from "../assets/images/giftcard-16.png";
import giftcardImg_17 from "../assets/images/giftcard-17.png";
import giftcardImg_18 from "../assets/images/giftcard-18.png";
import giftcardImg_19 from "../assets/images/giftcard-19.png";
import giftcardImg_20 from "../assets/images/giftcard-20.png";
import giftcardImg_21 from "../assets/images/giftcard-21.png";
import giftcardImg_22 from "../assets/images/giftcard-22.png";
import giftcardImg_23 from "../assets/images/giftcard-23.png";
import giftcardImg_24 from "../assets/images/giftcard-24.png";
import giftcardImg_25 from "../assets/images/giftcard-25.png";
import giftcardImg_26 from "../assets/images/giftcard-26.png";
import giftcardImg_27 from "../assets/images/giftcard-27.png";
import giftcardImg_28 from "../assets/images/giftcard-28.png";
import giftcardImg_29 from "../assets/images/giftcard-29.png";
import giftcardImg_30 from "../assets/images/giftcard-30.png";
import giftcardImg_31 from "../assets/images/giftcard-31.png";
import giftcardImg_32 from "../assets/images/giftcard-32.png";
import giftcardImg_33 from "../assets/images/giftcard-33.png";
import giftcardImg_34 from "../assets/images/giftcard-34.png";
import giftcardImg_35 from "../assets/images/giftcard-35.png";
import giftcardImg_36 from "../assets/images/giftcard-36.png";
import giftcardImg_37 from "../assets/images/giftcard-37.png";
import giftcardImg_38 from "../assets/images/giftcard-38.png";
import giftcardImg_39 from "../assets/images/giftcard-39.png";
import giftcardImg_40 from "../assets/images/giftcard-40.png";
import giftcardImg_41 from "../assets/images/giftcard-41.png";
import giftcardImg_42 from "../assets/images/giftcard-42.png";
import giftcardImg_43 from "../assets/images/giftcard-43.png";
import giftcardImg_44 from "../assets/images/giftcard-44.png";
import giftcardImg_45 from "../assets/images/giftcard-45.png";
import giftcardImg_46 from "../assets/images/giftcard-46.png";


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
    btnTo: "signup"
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

const Giftcards = [
  {
    id: 1,
    img: giftcardImg_1,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 2,
    img: giftcardImg_2,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 3,
    img: giftcardImg_3,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 4,
    img: giftcardImg_4,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 5,
    img: giftcardImg_5,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 6,
    img: giftcardImg_6,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 7,
    img: giftcardImg_7,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 8,
    img: giftcardImg_8,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 9,
    img: giftcardImg_9,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 10,
    img: giftcardImg_10,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 11,
    img: giftcardImg_11,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 12,
    img: giftcardImg_12,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 13,
    img: giftcardImg_13,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 14,
    img: giftcardImg_14,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 15,
    img: giftcardImg_15,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 16,
    img: giftcardImg_16,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 17,
    img: giftcardImg_17,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 18,
    img: giftcardImg_18,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 19,
    img: giftcardImg_19,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 20,
    img: giftcardImg_20,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 21,
    img: giftcardImg_21,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 22,
    img: giftcardImg_22,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 23,
    img: giftcardImg_23,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 24,
    img: giftcardImg_24,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 25,
    img: giftcardImg_25,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 26,
    img: giftcardImg_26,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 27,
    img: giftcardImg_27,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 28,
    img: giftcardImg_28,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 29,
    img: giftcardImg_29,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 30,
    img: giftcardImg_30,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 31,
    img: giftcardImg_31,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 32,
    img: giftcardImg_32,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 33,
    img: giftcardImg_33,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 34,
    img: giftcardImg_34,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 35,
    img: giftcardImg_35,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 36,
    img: giftcardImg_36,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 37,
    img: giftcardImg_37,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 38,
    img: giftcardImg_38,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 39,
    img: giftcardImg_39,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 40,
    img: giftcardImg_40,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 41,
    img: giftcardImg_41,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }, 
  {
    id: 42,
    img: giftcardImg_42,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 43,
    img: giftcardImg_43,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 44,
    img: giftcardImg_44,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 45,
    img: giftcardImg_45,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  },
  {
    id: 46,
    img: giftcardImg_46,
    amount: [
      {
        value: 10
      },
      {
        value: 25
      },
      {
        value: 50
      },
      {
        value: 100
      }
    ]
  }
]


export {
  homeCards,
  Giftcards,
  MenuProductCategoriesDrinks,
  MenuProductCategoriesFood,
  MenuProductCategoriesAtHomeCoffee,
  MenuProductCategoriesMerchandise,
};
